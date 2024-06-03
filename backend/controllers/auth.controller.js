/////////////////////
// Auth Controller
////////////////////
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// user schema
const User = require('../models/user.model')


///////////////////////
// Controller Functions
///////////////////////

// (GET) Get Login Page
exports.getLogin = (req, res, next) => {
    // if user is logged in, redirect to home page
    if (req.session.isLoggedIn) {
        return res.redirect('/');
    }
    else{
        res.redirect('/auth/login')
    }
}

// (POST) Post Login Page
exports.postLogin = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    if(username && password){
        let user = null
        // check if username is email
        if (username.includes('@')) {
            user = await User.findUserByEmail(username)
        }
        else{
            user = await User.findUserByUsername(username)
        }

        // Once we get the user
        if(user){
            // check if password is correct
            bcrypt.compare(password, user.password)
            .then(doMatch => {
                if(!doMatch){
                    return res.redirect('/auth/login')
                }else{
                    // if password is correct, set session and redirect to home page
                    req.session.isLoggedIn = true
                    req.session.user = user
                    res.redirect('/')

                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
        else{
            // if user is not found, redirect to login page
            res.redirect('/auth/login')
            console.log('User not found');
        }
    }
}

// (GET) Get Sign Up Page
exports.getSignUp = (req, res) => {
    const session = req.session.isLoggedIn
    if(session){
        res.redirect('/')
    }
    res.redirect('/auth/signup')
}