from dotenv import load_dotenv
import os

load_dotenv()

db_url = os.environ.get("DB_URL")
