const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class Rajaongkir extends Model {}

Rajaongkir.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Rajaongkir",
        tableName: "Rajaongkir",
        timestamps: false,
    }
);

module.exports = Rajaongkir;
