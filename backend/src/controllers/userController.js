const userError = require('../helper/errorHandler');
const USER = require('../models/userModel');
const bcrypt = require('bcrypt')


const register = async (req, res) => {
    try {        
        const useData = req.body;
        const hashPass = await bcrypt.hash(useData.user_password, 10);
        const setPass = await USER.create({
            ...useData,
            user_password: hashPass
        })
        res.status(201).json(setPass)
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
    index,
    store,
    find,
    update,
    deleteUser
}




