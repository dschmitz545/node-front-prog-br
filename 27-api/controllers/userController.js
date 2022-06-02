const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidate, registerValidate } = require('./validate');

const userContoller = {
    register: async function (req, res) {

        const { error } = registerValidate(req.body)
        if (error) { return res.status(400).send(error.message) };

        const selectUser = await User.findOne({ email_use: req.body.email })
        if (selectUser) return res.status(400).send('Email já cadastrado');

        const user = new User({
            name_use: req.body.name,
            email_use: req.body.email,
            admin_use: req.body.admin,
            passd_use: bcrypt.hashSync(req.body.passwd)
        });

        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)

        }
    },

    login: async function (req, res) {

        const { error } = loginValidate(req.body)
        if (error) { return res.status(400).send(error.message) };

        const selectUser = await User.findOne({ email_use: req.body.email })
        if (!selectUser) return res.status(400).send('Email ou senha incorretos');

        const passAndUserMatch = bcrypt.compareSync(req.body.passwd, selectUser.passd_use)
        if (!passAndUserMatch) return res.status(400).send('Email ou senha incorretos');


        /* const token = jwt.sign({
            _id: selectUser._id,
            admin_use: selectUser.admin_use}, process.env.TOKEN_SECRET) */

        const token = jwt.sign({
            _id: selectUser._id,
            email_use: selectUser.email_use,
            admin_use: selectUser.admin_use,
        }, process.env.TOKEN_SECRET, { expiresIn: "48h" });

        res.header('authorization-token', token);
        res.send('usuário Logado');
    }
}

module.exports = userContoller;