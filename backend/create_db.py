import asyncio
from sqlalchemy.ext.asyncio import create_async_engine
from src.models.base import Base
from src.config import settings
from src.utils.seeder import seed_permissions, seed_roles

async def setup_database():
    """Vytvoří databázové tabulky a naplní základní data"""
    engine = create_async_engine(settings.database_url)
    
    # Smazat existující tabulky a vytvořit nové
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    
    # Vytvořit session a naplnit základní data
    from src.database import AsyncSessionLocal
    async with AsyncSessionLocal() as session:
        permissions = await seed_permissions(session)
        roles = await seed_roles(session, permissions)
        
    await engine.dispose()
    print("Databáze byla úspěšně vytvořena a naplněna základními daty.")

if __name__ == "__main__":
    asyncio.run(setup_database()) 