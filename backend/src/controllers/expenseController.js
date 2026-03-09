const userError = require("../helper/errorHandler");
const EXPENSE = require("../models/ExpenseModel")

const index = async (req, res) => {
    try {
        const expense = await EXPENSE.findAll({
            where: { ex_fk_id: req.user.id }
        });
        res.status(200).json(expense)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
};


const store = async (req, res) => {
    try {
        const expenseData = await EXPENSE.create({
            ...req.body,
            ex_fk_id: req.user.id
        })
        res.status(200).json(expenseData)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
};


const find = async (req, res) => {
    try {
        const expData = await EXPENSE.findByPk(req.params.id);
        res.status(200).json(expData)
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
};


const update = async (req, res) => {
    const expUpdate = req.params.id;
    try {
        const expenseData = await EXPENSE.findByPk(expUpdate);
        if (!expenseData) {
            return res.status(404).json({ msg: "Expense Not Found" })
        }
        await expenseData.update(req.body);
        res.status(200).json(expenseData);
    } catch (error) {
        const errors = userError(error);
        return res.status(errors.status || 500).json(errors)
    }
}
const deleteExp = async (req, res) => {
    try {
        const delExpense = await EXPENSE.findByPk(req.params.id);
        if (!delExpense) {
            return res.status(404).json({ msg: "Not Found" });
        }

        await delExpense.destroy();
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
    deleteExp
}