from sqlalchemy import create_engine
from core.config import db_url
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



# Creating a SQLAlchemy database engine using the specified database URL.
SQLALCHEMY_DATABASE_URL = db_url

# engine serves as a connection pool and handles communication between the application and the database.
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Creating a sessionmaker for SQLAlchemy to manage database sessions.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Creating a base class for declarative models in SQLAlchemy.
Base = declarative_base()