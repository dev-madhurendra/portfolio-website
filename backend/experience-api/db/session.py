from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from core.config import db_url
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL = db_url

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()