from pydantic import BaseModel, EmailStr

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class TokenData(BaseModel):
    username: str | None = None

class UserAuth(BaseModel):
    email: EmailStr
    password: str

class UserRegister(UserAuth):
    username: str 