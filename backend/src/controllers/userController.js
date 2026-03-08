const userError = require('../helper/errorHandler');
const USER = require('../models/userModel');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    try {
        const useData = req.body;
        const hashPass = await bcryptjs.hash(useData.user_password, 10);
        const setPass = await USER.create({
            ...useData,
            user_password: hashPass
        })
        res.status(201).json({ data: setPass })
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}

const login = async (req, res) => {

    try {
        const data = req.body;

        const findUser = await USER.findOne({
            where: { user_email: data.user_email }
        })

        if (!findUser) {
            return res.status(401).json({ msg: "Invalid Creadentials" })
        }

        const matchPass = await bcryptjs.compare(
            data.user_password,
            findUser.user_password
        );

        if (!matchPass) {
            return res.status(401).json({ msg: "Invalird Credentials" });
        }

        const paylod = {
            id: findUser.user_id,
            email: findUser.user_email
        }; 

        const token = jwt.sign(paylod, "ameypatiljbalajipatil", {
            expiresIn: "1h"
        })

        res.status(200).json({
            token,
            user: findUser
        })
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
        
    }
}

const index = async (req, res) => {
    try {
        const use = await USER.findAll();
        res.status(200).json(use)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}

const store = async (req, res) => {
    const useData = req.body;
    try {
        await USER.create(useData);
        res.status(200).json(useData)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }


}

const find = async (req, res) => {
    try {
        const useData = await USER.findByPk(req.params.id);
        res.status(200).json(useData)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }

}

const update = async (req, res) => {
    const user = req.params.id
    try {
        const useData = await USER.findByPk(user);
        if (!useData) {
            return res.status(404).json({ msg: "User not Found" })
        }
        await useData.update(req.body);
        res.status(200).json(useData)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }

}

const deleteUser = async (req, res) => {
    try {
        const userData = await USER.findByPk(req.params.id);
        if (!userData) {
            return res.status(404).json({ msg: "User not Found" })
        }
        await userData.destroy();
        res.status(200).json({ msg: "User Delete Successfully" })
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}


module.exports = {
    register,
    login,
    index,
    store,
    find,
    update,
    deleteUser
}




