const mongoose = require('mongoose')

module.exports = {
    checkMongoId: (req, res, next) => mongoose.Types.ObjectId.isValid(req.params.id) ? next() : res.status(400).json({ status: 400, message: 'Wrong ID format' }),
    isLoggedIn: (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({ message: 'No Autorizado' })
}