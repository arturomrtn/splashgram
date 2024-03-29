require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/cors.config')(app)
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)

// Routes index
require('./routes')(app)

// Error handling
require('./configs/error-handlers.config')(app)

module.exports = app