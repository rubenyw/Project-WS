const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");
const User = require("./User");
const Kota = require("./Kota");

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
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        id_traveller: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        berat: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_kota_keberangkatan: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Kota,
                key: "id",
            },
        },
        id_kota_tujuan: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Kota,
                key: "id",
            },
        },
        durasi: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        harga: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Barang",
        tableName: "Barang",
        timestamps: false,
    }
);

module.exports = Barang;
