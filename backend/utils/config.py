from dotenv import load_dotenv
import os

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
RAPIDAPI_API_KEY = os.getenv("RAPIDAPI_API_KEY")