const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class Kota extends Model {}

Kota.init(
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
        modelName: "Kota",
        tableName: "Kota",
        timestamps: false,
    }
);

module.exports = Kota;
