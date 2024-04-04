from flask import request, session, redirect, url_for, flash
from werkzeug.security  import generate_password_hash, check_password_hash
from flask import Blueprint
import os
from dotenv import load_dotenv
from pymongo import MongoClient
import bcrypt

# Load environment variables
load_dotenv()

# MongoDB connection
mongo_url = os.getenv("MONGO_URL")
mongo = MongoClient(mongo_url)
db = mongo['users']


# Authentication Blueprint
auth_blueprint = Blueprint('auth', __name__)

# LOGIN ROUTE
@auth_blueprint.route('/login', methods=['POST'])
def login():
    # Get the form data
    data = request.json
    if data:
        email = data["email"]
        password = data['password']
        print(email)
        print(password)
        
        # Find User in the db
        user = db.credentials.find_one({'email': email})
        
        
        #check password
        if user:
            hashed_pw = user['password']
            if bcrypt.checkpw(password.encode('utf8'), hashed_pw):
                # Successful login
                print('Good Password')
                session['user'] = str(user['_id'])
                return redirect(url_for('/'))
            else:
                print('Hash didnt work')
    




# SIGNUP ROUTE
@auth_blueprint.route('/signup', methods=['POST'])
def signUp():
    # Get form data
    data = request.json
    
    email = data['email']
    password = data['password']
    repeatPassword = data['repeatPassword']
    
    # check if both passwords match
    if password == repeatPassword:
        print('match')
        # check if user already exists
        user_exists = db.credentials.find_one({email:  email})
        if user_exists:
            print('User already exist')
            return 'User already exist'
        
        else:
            # if user doesn't exists hash password and create user
            hashed_password = bcrypt.hashpw(password.encode('utf8'), bcrypt.gensalt())
            
            db.credentials.insert_one({
                'email': email,
                'password': hashed_password
            })
            
            
            print('User has been created')
            
                
# LOGOUT ROUTE
@auth_blueprint.route("/logout")
def logout():
    # remove the username from the session if it's there
    if session['user']:
        session['user'] = None
        flash("You have been logged out.")
        # redirect user to login page
        return redirect(url_for('/login'))
    
    
@auth_blueprint.route('/getHello', methods=['GET'])
def get_init():
    return 'Auth Blueprint!!!!'
    