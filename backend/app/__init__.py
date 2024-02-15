from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient('mongodb+srv://mathiasmendozavargas1403:Itunes1403@users.rnvh68b.mongodb.net/?retryWrites=true&w=majority')
db = client['users']
collection = db['credentials']

from app import routes