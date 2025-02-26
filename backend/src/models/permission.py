from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from .base import Base

class Permission(Base):
    __tablename__ = "permissions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)

    # Vztahy
    roles = relationship("Role", secondary="role_permissions", back_populates="permissions") 