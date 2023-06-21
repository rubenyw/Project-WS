const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no_hp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        api_key: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        api_hit: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        saldo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "User",
        tableName: "User",
        timestamps: false,
    }
);

module.exports = User;
