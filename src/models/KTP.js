const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");
const User = require("./User");

class KTP extends Model {}
KTP.init(
    {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
        tableName: "ktp",
        timestamps: false,
    }
);

module.exports = KTP;
