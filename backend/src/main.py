from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import user_routes

app = FastAPI(title="API", version="1.0.0")

# Konfigurace CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # V produkci by mělo být omezeno
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Přidání routerů
app.include_router(user_routes.router)

@app.get("/")
async def root():
    return {"message": "API je funkční"} 