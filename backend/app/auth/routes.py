from . import auth_blueprint
from flask import request, session, redirect, url_for, flash
from werkzeug.security  import generate_password_hash, check_password_hash
from app import mongo


@auth_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Get the form data
        username = request.form.get('username')
        password = request.form.get('password')
        
        # Find User in the db
        user = mongo.credentials.find_one({'username': username})
        
        #check password
        if user and check_password_hash(user['password'], password):
            # Successful login
            session['user'] = str(user['_id'])
            return redirect(url_for('/'))
        else:
            flash("Invalid credentials")
            
    
    return redirect(url_for('/auth/login'))

@auth_blueprint.route("/logout")
def logout():
    # remove the username from the session if it's there
    flash("You have been logged out.")
    return redirect(url_for('auth.login'))