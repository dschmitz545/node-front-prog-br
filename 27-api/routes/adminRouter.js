const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/', auth, (req, res) => {

    if (req.user.admin_use)

        res.send("Apenas deve ser visto pelo admin")

    else {
        res.status(401).send("Não é admin, Acesso negado")
    }
})

router.get('/free', auth, (req, res) => {
    res.send('Esse dado só deve ser visto por quem está logado ')
})

module.exports = router;