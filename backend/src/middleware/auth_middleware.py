from fastapi import Request, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.responses import JSONResponse
from ..auth.jwt import verify_token
import logging

logger = logging.getLogger(__name__)
security = HTTPBearer()

async def jwt_middleware(request: Request, call_next):
    """Middleware pro ověření JWT tokenu"""
    
    # Cesty, které nevyžadují autentizaci
    public_paths = [
        "/docs",
        "/redoc",
        "/openapi.json",
        "/",
        "/health",
        "/auth/register",
        "/auth/login",
    ]
    
    if request.url.path in public_paths:
        return await call_next(request)
    
    try:
        # Získání a ověření tokenu
        credentials: HTTPAuthorizationCredentials = await security(request)
        token = credentials.credentials
        payload = verify_token(token)
        
        # Přidání informací o uživateli do requestu
        request.state.user = payload
        return await call_next(request)
        
    except HTTPException as e:
        logger.warning(f"Authentication failed for {request.url.path}: {str(e)}")
        return JSONResponse(
            status_code=status.HTTP_401_UNAUTHORIZED,
            content={"detail": "Not authenticated"}
        )
    except Exception as e:
        logger.error(f"Unexpected error in auth middleware: {str(e)}")
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": "Internal server error during authentication"}
        ) 