const sequelize = require('sequelize');

const database = new sequelize('React', 'teste', 'test', {
    dialet: 'mssql', host: 'localhost', port: 1433
})

database.sync();

module.exports = database