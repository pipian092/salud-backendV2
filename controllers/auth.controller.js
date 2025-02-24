const { request, response } = require("express");
const { User } = require("../models/");
const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/generate-jwt");

const login = async (req = request, res = response) => {
    try {

        const { email, password } = req.body;

        const usuario = await User.findOne(
            {
                where: {
                    email: email
                },
            }
        );

        if (!usuario) {
            return res.status(400).json({
                msg: 'Correo / Contraseña  no son correctos'
            });
        }

        if (!usuario.active) {
            return res.status(400).json({
                msg: 'Correo / Contraseña  no son correctos'
            });
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Correo / Contraseña  no son correctos'
            });
        }

        const token = await generateJWT(usuario.id);

        res.json({ user: usuario, token });

    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: 'Hable con el administrador', error: error });
    }
}

const checkToken = async (req = request, res = response) => {

    try {
        const user = req.user;

        const token = await generateJWT(user.id);

        res.json({ user, token });


    } catch (error) {
        res.status(500).json({ ok: false, msg: error, data: null });
    }

}


module.exports = {
    login,
    checkToken
}