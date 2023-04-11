const {Model, DataTypes} = require('sequelize');
const db = require('../databases/database');

class Temp extends Model{}
Temp.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.STRING
        }
    },
    {
        sequelize: db,
        timestamps: false,
        modelName: "Temp",
        tableName: "temp"
    }
)

module.exports = Temp;