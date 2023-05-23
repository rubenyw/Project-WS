const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class Perjalanan extends Model {}

Perjalanan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_traveller: {
            type: DataTypes.INTEGER,
        },
        id_kota_keberangkatan: {
            type: DataTypes.INTEGER,
        },
        id_kota_tujuan: {
            type: DataTypes.INTEGER,
        },
        durasi: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: db,
        modelName: "Perjalanan",
        tableName: "Perjalanan",
        timestamps: false,
    }
);

module.exports = {
    Perjalanan,
};
