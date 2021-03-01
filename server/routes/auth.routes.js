const express = require("express")
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")

const User = require("../models/user.model")

router.post('/register', (req, res) =>{
    const {username, password} = req.body

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
                .create({ username, password: hashPass })
                .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Error de inicio de sesión' }) : res.status(200).json(newUser)))
                .catch(() => res.status(500).json({ message: 'Error guardando el usuario a la BD' }))
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


module.exports = router