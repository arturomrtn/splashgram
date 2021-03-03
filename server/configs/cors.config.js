const cors = require('cors')

const whitelist = [process.env.DOMAIN_LOCAL]

const corsOptions = {
        origin: "*",
    credentials: false

}


module.exports = app => app.use(cors(corsOptions))