"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("rajaongkir", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("rajaongkir");
    },
};
