from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from ..models import Role, Permission, User

async def seed_permissions(db: AsyncSession) -> List[Permission]:
    permissions = [
        Permission(name="user:read", description="Může číst uživatelské údaje"),
        Permission(name="user:write", description="Může upravovat uživatelské údaje"),
        Permission(name="role:read", description="Může číst role"),
        Permission(name="role:write", description="Může upravovat role"),
    ]
    
    for permission in permissions:
        db.add(permission)
    await db.commit()
    return permissions

async def seed_roles(db: AsyncSession, permissions: List[Permission]) -> List[Role]:
    # Vytvoření základních rolí
    admin_role = Role(
        name="admin",
        description="Administrátor systému",
        permissions=permissions  # Admin má všechna oprávnění
    )
    
    user_role = Role(
        name="user",
        description="Běžný uživatel",
        permissions=[p for p in permissions if p.name.startswith("user:read")]
    )
    
    db.add(admin_role)
    db.add(user_role)
    await db.commit()
    return [admin_role, user_role] 