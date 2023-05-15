const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");
const User = require("./User");

class KTP extends Model {}
KTP.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        foto_ktp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "KTP",
        tableName: "KTP",
        timestamps: false,
    }
);

module.exports = KTP;
