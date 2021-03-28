const cors = require('cors')

const whitelist = [process.env.DOMAIN]

const corsOptions = {
    origin: "*",
    credentials: false

}


module.exports = app => app.use(cors(corsOptions))