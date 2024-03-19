from flask import request, session, redirect, url_for, flash
from werkzeug.security  import generate_password_hash, check_password_hash
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


# Authentication Blueprint
auth_blueprint = Blueprint('auth', __name__)

# LOGIN ROUTE
@auth_blueprint.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        # Get the form data
        data = request.json
        if data:
            email = data["email"]
            password = data['password']
            
            # Find User in the db
            user = db.credentials.find_one({'email': email})
            print(user)
            
            #check password
            if user and check_password_hash(user['password'], password):
                # Successful login
                session['user'] = str(user['_id'])
                return redirect(url_for('/'))
            else:
                flash("Invalid credentials")
        
        
        
    return 'Hi there'




# SIGNUP ROUTE
@auth_blueprint.route('/signup', methods=['GET','POST'])
def signUp():
    if request.method == 'POST':
        # Get form data
        email = request.form.get('email')
        password = request.form.get('password')
        verifyPassword = request.form.get('verifyPassword')
        
        # check if both passwords match
        if password == verifyPassword:
            # check if user already exists
            user_exists = db.credentials.find_one({email:  email})
            if user_exists:
                flash('Username already exists.')
                return redirect(url_for('/signup'))
            
            # if user doesn't exists hash password and create user
            hashed_password = generate_password_hash(password, method='sha256')
            
            db.credentials.insert_one({
                'email': email,
                'password': hashed_password
            })
            
            
            flash('Account created successfully! Please login.')
            return redirect(url_for('.login'))
    
    if request.method == 'GET':
        return redirect(url_for('/signup'))
            
                
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
    