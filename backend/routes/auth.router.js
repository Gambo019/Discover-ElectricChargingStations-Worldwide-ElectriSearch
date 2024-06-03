/////////////////
// User's Router
/////////////////
const auth_router = require('express').Router()

const {
    getLogin,
    postLogin,
    getSignUp,
} = require('../controllers/auth.controller')

auth_router.route('/login').get(getLogin).post(postLogin)
auth_router.route('/signup').get(getSignUp)

module.exports = auth_router;