const userError = require("../helper/errorHandler");
const INCOME = require("../models/incomeModel");


const index = async (req, res) => {
    try {
        const income = await INCOME.findAll({
            where: { fk_id: req.user.id }
        });
        res.status(200).json(income)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}
const store = async (req, res) => {
    try {
      const incomeData = await INCOME.create({
        ...req.body,
        fk_id:req.user.id
      });
        res.status(200).json(incomeData)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}
const find = async (req, res) => {
    try {
        const incomData = await INCOME.findByPk(req.params.id);
        res.status(200).json(incomData);
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}
const update = async (req, res) => {
    const updatIncome = req.params.id;
    try {
        const incomeData = await INCOME.findByPk(updatIncome);
        if (!incomeData) {
            return res.status(404).json({ msg: "Income Not Found" })
        }
        await incomeData.update(req.body);
        res.status(200).json(incomeData)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}
const deleteIncome = async (req, res) => {
    try {
        const incomData = await INCOME.findByPk(req.params.id);
        if (!incomData) {
            return res.status(404).json({ msg: "Not Found" })
        }
        await incomData.destroy();
        res.status(200).json({ msg: "Delete Successfully" })
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}

module.exports = {
    index,
    store,
    find,
    update,
    deleteIncome
}    