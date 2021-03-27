const express = require("express")
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")

const User = require("../models/user.model")

router.post('/signup', (req, res) => {
    const { username, password, lastname, firstname, bio } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Rellena todos los campos' })
        return
    }

    if (password.length < 8) {
        res.status(400).json({ message: 'Contraseña insegura, debe tener al menos 8 caracteres.' })
        return
    }

    User
        .findOne({ username })
        .then(foundUser => {
            if (foundUser) {
                res.status(400).json({ message: 'El usuario ya existe, por favor escribe uno nuevo.' })
                return
            }

            const salt = bcrypt.genSaltSync(12)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass, lastname, firstname, bio })
                .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Error de inicio de sesión' }) : res.status(200).json(newUser)))
                .catch((error) => res.status(500).json({ message: 'Error guardando el usuario a la BD', originalMessage: error }))
        })
})

router.post('/login', (req, res, next) => {

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error al autenticar usuario.' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, err => err ? res.status(500).json({ message: 'Session error' }) : res.status(200).json(theUser))

    })(req, res, next)
})

router.post('/logout', (req, res) => {
    req.logout()
    res.status(200).json({ message: 'Cerró sesión con éxito!' });
})


router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.status(200).json(req.user) : res.status(403).json({ message: 'No Autorizado' }))

router.get('/getUser/:user_id', (req, res) => {

    User
        .findById(req.params.user_id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json(err))

})


router.put('/updateUser', (req, res) => {
    const user = req.body

    User
        .findByIdAndUpdate(user._id, user)
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(500).json(err))

})

router.get('/deleteUser', (req, res) => {


    User
        .findByIdAndDelete(req.query.user_Id)
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(500).json(err))

})


module.exports = router