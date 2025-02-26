from typing import List
import os
from dotenv import load_dotenv

# Načtení proměnných prostředí z .env souboru
load_dotenv()

class Settings:
    def __init__(self):
        # Základní nastavení aplikace
        self.app_name = os.getenv("APP_NAME", "BifrostAuth API")
        self.app_version = os.getenv("APP_VERSION", "0.1.0")
        self.app_description = os.getenv("APP_DESCRIPTION", "Autentizační a uživatelský management systém")
        self.environment = os.getenv("ENVIRONMENT", "development")

        # Databáze
        self.database_url = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./test.db")

        # JWT
        self.secret_key = os.getenv("SECRET_KEY", "your-secret-key-here")
        self.algorithm = os.getenv("ALGORITHM", "HS256")
        self.access_token_expire_minutes = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30"))

        # CORS
        cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:3000,http://localhost:5173")
        self.cors_origins = [origin.strip() for origin in cors_origins.split(",")]

# Vytvoření instance nastavení
settings = Settings() 