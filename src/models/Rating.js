const { Model, DataTypes } = require("sequelize");
const db = require("../databases/database");
const User = require("./User");

class Rating extends Model {}
Rating.init(
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
        rate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Rating",
        tableName: "rating",
        timestamps: false,
    }
);

module.exports = Rating;
