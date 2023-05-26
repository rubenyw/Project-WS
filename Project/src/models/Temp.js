const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class Temp extends Model {}

Temp.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Temp",
        tableName: "Temp",
        timestamps: false,
    }
);

module.exports = Temp;
