const mongoose = require('mongoose')
const URI = process.env.DB_LOCAL

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(x => console.log('>>> Database Connected! <<'))
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose