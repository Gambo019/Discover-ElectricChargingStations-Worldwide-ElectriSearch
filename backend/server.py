from flask import Flask, jsonify, request
from flask_cors import CORS

# app instance
app = Flask(__name__)
CORS(app)




# Authentication for Login and SignUp
@app.route('/auth/login', methods=['POST'])
def try_login():
    # code to authenticate user here
    email = request.form.get('email')
    password = request.form.get('password')
    
    return({
        email,
        password
    })
    
    
@app.route('/auth/signup', methods=['POST'])
def try_signUp():
    # code to authenticate user here
    return False


# /api/home
@app.route('/api/home', methods=['GET'])
def return_home():
    return jsonify({
        'message': 'Hello World'
    })


if __name__ == "__main__":
    app.run(debug=True, port=8080)