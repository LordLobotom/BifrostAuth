from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from datetime import datetime
import psutil
import platform
import logging
from sqlalchemy.exc import SQLAlchemyError

from .config import settings
from .routers import user_routes, auth_routes
from .database import AsyncSessionLocal

# Nastavení loggingu
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description=settings.app_description
)

# Konfigurace CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Přidání routerů
app.include_router(user_routes.router)
app.include_router(auth_routes.router)

@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    logger.error(f"HTTP error: {exc.detail} - path: {request.url.path}")
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail}
    )

@app.get("/")
async def root():
    logger.info("Accessing root endpoint")
    return {"message": "Vítejte v BifrostAuth API"}

@app.get("/health")
async def health_check():
    try:
        # Kontrola DB
        async with AsyncSessionLocal() as session:
            await session.execute("SELECT 1")
        db_status = "healthy"
    except SQLAlchemyError as e:
        logger.error(f"Database health check failed: {str(e)}")
        db_status = "unhealthy: database error"
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        db_status = "unhealthy: system error"

    return {
        "status": "ok" if db_status == "healthy" else "degraded",
        "database": db_status,
        "timestamp": datetime.now().isoformat(),
        "version": settings.app_version,
        "environment": settings.environment,
        "system": {
            "cpu_usage": psutil.cpu_percent(),
            "memory_usage": psutil.virtual_memory().percent,
            "python_version": platform.python_version(),
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 