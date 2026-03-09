const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const EXPENSE = sequelize.define(
    "EXPENSE",
    {
        ex_source: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Source is Requried"
                }
            }
        },

        ex_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Amout is Requried"
                }
            }
        },

        ex_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },

        ex_time: {
            type: DataTypes.TIME,
            allowNull: false
        },

        ex_fk_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        tableName: "expenseTable",
        timestamps: true
    }
)

EXPENSE.sync();
module.exports = EXPENSE;