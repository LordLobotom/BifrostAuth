import asyncio
from sqlalchemy.ext.asyncio import create_async_engine
from src.models.base import Base
from src.database import database_url

async def create_tables():
    engine = create_async_engine(database_url)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    await engine.dispose()

if __name__ == "__main__":
    asyncio.run(create_tables()) 