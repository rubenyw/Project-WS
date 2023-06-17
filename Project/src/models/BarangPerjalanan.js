const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class BarangPerjalanan extends Model {}

BarangPerjalanan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_perjalanan: {
            type: DataTypes.INTEGER,
        },
        id_barang: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize: db,
        modelName: "BarangPerjalanan",
        tableName: "barangperjalanan",
        timestamps: false,
    }
);

module.exports = BarangPerjalanan;
