"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("barangperjalanan", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_perjalanan: {
                type: Sequelize.INTEGER,
            },
            id_barang: {
                type: Sequelize.INTEGER,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("barangperjalanan");
    },
};
