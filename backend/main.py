from flask import Blueprint

from .extensions import mongo

main = Blueprint('main', __name__)

@main.route('/')
def index():
    user_collection = mongo.db.isupper()
    user_collection.insert({'name': 'Mathias'})
    user_collection.insert({'name': 'Derek'})
    return '<h1>Added User!<h1/>'