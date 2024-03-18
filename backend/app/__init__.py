from flask import Flask
from pymongo import MongoClient
import os
from flask_cors import CORS
from dotenv import load_dotenv
from app.auth import auth_blueprint

app = Flask(__name__)
CORS(app)
app.register_blueprint(auth_blueprint)

# Load environment variables
load_dotenv()

# MongoDB connection
mongo_url = os.getenv("MONGO_URL")
mongo = MongoClient(mongo_url)
db = mongo['users']
collection = db['credentials']

from app.api import routes