"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("kota", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            id_rajaongkir: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            id_flightapi: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("kota");
    },
};
