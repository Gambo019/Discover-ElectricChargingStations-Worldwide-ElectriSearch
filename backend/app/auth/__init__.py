from flask import Blueprint
import os
from dotenv import load_dotenv
from pymongo import MongoClient

# Load environment variables
load_dotenv()

# MongoDB connection
mongo_url = os.getenv("MONGO_URL")
mongo = MongoClient(mongo_url)
db = mongo['users']
collection = db['credentials']


# Authentication Blueprint
auth_blueprint = Blueprint('auth', __name__)

from . import routes