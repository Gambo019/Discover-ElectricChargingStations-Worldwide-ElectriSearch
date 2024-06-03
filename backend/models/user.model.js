//////////////////////
// User Model/Schema
//////////////////////
const db = require('../db/connection')


module.exports = class User{
    constructor(username, email, password, firstName, lastName, age, gender) {
        this.username = username
        this.email = email
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
    }

    // Save new User on DB
    async save(){
        const user = await db.collection('users').insertOne(this)
        if(!user){
            throw new Error('Error saving user')
        }
        
    }

    // Find User by Email
    static async findUserByEmail(email){
        const user = await db.collection('users').findOne({'email': email})
        if(user) return user
        else{
            return null
        }
    }

    // Find User by Username
    static async findUserByUsername(username){
        let user = await db.collection('users').findOne({'username': username})
        if(user) return user
        else{
            return null
        }
    }
    
}