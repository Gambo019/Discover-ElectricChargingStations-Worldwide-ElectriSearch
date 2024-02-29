from flask import Flask
from pymongo import MongoClient
import os
from dotenv import load_dotenv

app = Flask(__name__)

# Load environment variables
load_dotenv()

# MongoDB connection
mongo_url = os.getenv("MONGO_URL")
mongo = MongoClient(mongo_url)
db = mongo['users']
collection = db['credentials']

from app.api import routes