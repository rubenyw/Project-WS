"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("barang", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_sender: {
                type: Sequelize.INTEGER,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            berat: {
                type: Sequelize.INTEGER,
            },
            harga: {
                type: Sequelize.INTEGER,
            },
            id_kota_keberangkatan: {
                type: Sequelize.INTEGER,
            },
            id_kota_tujuan: {
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.STRING,
                defaultValue: "PENDING",
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("barang");
    },
};
