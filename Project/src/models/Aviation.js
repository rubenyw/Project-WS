const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class Aviation extends Model {}

Aviation.init(
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
        modelName: "Aviation",
        tableName: "Aviation",
        timestamps: false,
    }
);

module.exports = Aviation;
