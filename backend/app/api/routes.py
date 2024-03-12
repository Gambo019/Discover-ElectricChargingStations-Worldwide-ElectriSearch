from app import app, collection
from flask import request, jsonify
from bson.objectid import ObjectId


# CRUD operations

# Create
@app.route('/create', methods=['POST'])
def create():
    data = request.json
    result = collection.insert_one(data)
    return jsonify({'result': 'success', 'document_id': str(result.inserted_id)}), 201

# Read
@app.route('/', methods=['GET'])
def get_init():
    return '<h1>Welcome</h1>'

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