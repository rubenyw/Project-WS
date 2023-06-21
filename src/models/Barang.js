const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class Barang extends Model {}

Barang.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_sender: {
            type: DataTypes.INTEGER,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        berat: {
            type: DataTypes.INTEGER,
        },
        harga: {
            type: DataTypes.INTEGER,
        },
        id_kota_keberangkatan: {
            type: DataTypes.INTEGER,
        },
        id_kota_tujuan: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "PENDING",
        },
    },
    {
        sequelize: db,
        modelName: "Barang",
        tableName: "barang",
        timestamps: false,
    }
);

module.exports = Barang;
