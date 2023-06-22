const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class Perjalanan extends Model {}

Perjalanan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        waktu_keberangkatan: {
            type: DataTypes.TIME,
        },
    },
    {
        sequelize: db,
        modelName: "Perjalanan",
        tableName: "perjalanan",
        timestamps: false,
    }
);

module.exports = Perjalanan;
