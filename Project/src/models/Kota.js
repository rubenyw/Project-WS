const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class Kota extends Model {}

Kota.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrementIdentity: true,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_rajaongkir: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        id_flightapi: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Kota",
        tableName: "Kota",
        timestamps: false,
    }
);

module.exports = Kota;
