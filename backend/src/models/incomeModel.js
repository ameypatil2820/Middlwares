const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const INCOME = sequelize.define(
    "INCOME",
    {
        in_source: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Sourrce is Requried"
                }
            }
        },

        in_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Amount is Requried"
                }
            }
        },

        in_data: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Date is Requried"
                }
            }
        },

        in_time: {
            type: DataTypes.TIME,
            allowNull: false
        },

        fk_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "incomeTable",
        timestamps: true
    }
)

INCOME.sync();
module.exports = INCOME;
