const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

const MONGODB_URI = process.env.MONGODB_URI

mongoose
    .connect(process.env.DB_REMOTE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(details => {
        const { name, client } = details.connections[0]
        console.log(`Connected to database "${name}" (URL: ${client.s.url})`)
    })
    .catch(err => console.error('Error connecting to Mongo', err))





    //const mongoose = require('mongoose')
//const URI = process.env.DB_LOCAL

//mongoose
  //  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    //.then(x => console.log('>>> Database Connected! <<'))
    //.catch(err => console.error('Error connecting to mongo', err))

//module.exports = mongoose