const { DataTypes } = require('sequelize');
const sequlize = require('../config/db');

const USER = sequlize.define(
    "USER",
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Name is Requried"
                }
            }
        },

        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Email is Requried"
                }
            },
            unique: {
                msg: "Email is Exists "
            }
        },

        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Password is Requried"
                },
                len: {
                    args: [2, 100],
                    msg: "Pass is Requried 2-10 Char"

                }
            }
        },

        status: {
            type: DataTypes.ENUM("admin", "user"),
            allowNull: false
        },

    },

    {
        tableName: "usermodeltable",
        timestamps: true,
    }
)

USER.sync();

module.exports = USER;