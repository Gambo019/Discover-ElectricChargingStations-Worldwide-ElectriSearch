from . import auth_blueprint
from flask import request, redirect, url_for, flash


@auth_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return 'Yeah bby'
    
    return redirect(url_for('/'))

@auth_blueprint.route("/logout")
def logout():
    # remove the username from the session if it's there
    flash("You have been logged out.")
    return redirect(url_for('auth.login'))