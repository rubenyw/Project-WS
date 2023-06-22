"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("perjalanan", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_traveller: {
                type: Sequelize.INTEGER,
            },
            id_kota_keberangkatan: {
                type: Sequelize.INTEGER,
            },
            id_kota_tujuan: {
                type: Sequelize.INTEGER,
            },
            durasi: {
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.STRING,
            },
            waktu_keberangkatan: {
                type: Sequelize.TIME,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("perjalanan");
    },
};
