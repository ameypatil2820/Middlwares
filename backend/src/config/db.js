const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        storage: "./incomtabledb.sqlite",
        logging: false
    }
)

sequelize
    .authenticate()
    .then(() => {
        console.log('Server Running Successfully');
    })
    .catch(() => {
        console.log('Server Running Faild');
    });

module.exports = sequelize;
