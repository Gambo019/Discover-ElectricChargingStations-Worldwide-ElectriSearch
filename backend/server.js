////////////////////
// Main Server File
////////////////////
const cors = require('cors')
const express = require('express')

// App
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

///////////
// Routes
///////////
const authRouter = require('./routes/auth.router')

app.get('/', (req, res) => {
    const session = req.session.isLoggedIn
    if(session){
        res.send('Welcome to the server')
    }
    else{
        res.redirect('/auth/login')
    }
})

app.use('/auth', authRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})