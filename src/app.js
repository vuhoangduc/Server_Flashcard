
const express = require('express')
const app = express()
const morgan = require('morgan')
const {default:helmet} = require('helmet')
const compression = require('compression')
require('dotenv').config()
// init midleware
app.use(morgan("dev"));
app.use(helmet())
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(compression(),
express.json());
// init routes
app.use((req,res,next)=>{
    res.json('Hello!')
})
// handling error
app.use((req,res,next)=>{
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error,req,res,next)=>{
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status:'error',
        code:statusCode,
        stack:error.stack,
        message:error.message || 'Internal Server Error'
    })
})

module.exports = app