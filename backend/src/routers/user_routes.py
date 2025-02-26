from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
import logging
from sqlalchemy.orm import joinedload

from ..database import get_db
from ..models.user import User
from ..schemas.user import UserCreate, UserResponse, UserUpdate

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(user_data: UserCreate, db: AsyncSession = Depends(get_db)):
    user = User(**user_data.model_dump())
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user

@router.get("/", response_model=List[UserResponse])
async def get_users(skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).offset(skip).limit(limit))
    users = result.scalars().all()
    return users

@router.get("/me")
async def get_current_user(request: Request, db: AsyncSession = Depends(get_db)):
    """Endpoint pro získání informací o přihlášeném uživateli"""
    try:
        user_data = request.state.user
        logger.info(f"Getting user data for: {user_data}")
        
        if not user_data or "sub" not in user_data:
            logger.error("No user data in request state")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials"
            )

        stmt = (
            select(User)
            .options(joinedload(User.roles))
            .filter(User.username == user_data["sub"])
        )
        result = await db.execute(stmt)
        user = result.unique().scalar_one_or_none()
        
        if not user:
            logger.warning(f"User not found: {user_data['sub']}")
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"User {user_data['sub']} not found"
            )
            
        roles = [{"id": role.id, "name": role.name} for role in user.roles]
            
        response = {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "roles": roles
        }
        logger.info(f"Successfully retrieved user data: {response}")
        return response
        
    except Exception as e:
        logger.error(f"Error in get_current_user: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

@router.get("/{user_id}", response_model=UserResponse)
async def get_user(user_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).filter(User.id == user_id))
    user = result.scalars().first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Uživatel s ID {user_id} nebyl nalezen"
        )
    
    return user

@router.patch("/{user_id}", response_model=UserResponse)
async def update_user(user_id: int, user_data: UserUpdate, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).filter(User.id == user_id))
    user = result.scalars().first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Uživatel s ID {user_id} nebyl nalezen"
        )
    
    update_data = user_data.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(user, key, value)
    
    await db.commit()
    await db.refresh(user)
    return user

@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).filter(User.id == user_id))
    user = result.scalars().first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Uživatel s ID {user_id} nebyl nalezen"
        )
    
    await db.delete(user)
    await db.commit()
    return None 