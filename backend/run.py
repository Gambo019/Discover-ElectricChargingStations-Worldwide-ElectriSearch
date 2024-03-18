from app import app
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from app.auth import auth_blueprint
from bson.objectid import ObjectId

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


# Create
@app.route('/create', methods=['POST'])
def create():
    data = request.json
    result = collection.insert_one(data)
    return jsonify({'result': 'success', 'document_id': str(result.inserted_id)}), 201

# Read
@app.route('/', methods=['GET'])
def get_init():
    return 'Hello Worldd'
 
@app.route('/read/<id>', methods=['GET'])
def read(id):
    document = collection.find_one({'_id': ObjectId(id)})
    if document:
        document['_id'] = str(document['_id'])  # Convert ObjectId to string for JSON serialization
        return jsonify(document), 200
    else:
        return jsonify({'result': 'not found'}), 404

# Update
@app.route('/update/<id>', methods=['PUT'])
def update(id):
    data = request.json
    result = collection.update_one({'_id': ObjectId(id)}, {'$set': data})
    if result.modified_count:
        return jsonify({'result': 'success'}), 200
    else:
        return jsonify({'result': 'not modified'}), 304

# Delete
@app.route('/delete/<id>', methods=['DELETE'])
def delete(id):
    result = collection.delete_one({'_id': ObjectId(id)})
    if result.deleted_count:
        return jsonify({'result': 'success'}), 200
    else:
        return jsonify({'result': 'not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)