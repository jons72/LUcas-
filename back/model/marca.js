const sequelize = require('sequelize');
const database = require('../config/db');
const schema = "";

class marca extends sequelize.model{}

marca.init(
    {
        codigomarca: {
            type: sequelize.interger,
            autoincrement: true,
            allowNull: false,
            primarykey: true

        },
        nome: {
            type: sequelize.STRING,
            allowNull: true,
        }
    },
    {
        sequelize: database, modelName: 'Marca', schema
    }
)
module.exports = Marca;