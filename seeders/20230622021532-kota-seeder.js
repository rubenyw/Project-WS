"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("kota", [
            { id: 1, nama: "AMBON", id_rajaongkir: 14, id_flightapi: 257 },
            { id: 2, nama: "BALIKPAPAN", id_rajaongkir: 19, id_flightapi: 878 },
            { id: 3, nama: "BANDA ACEH", id_rajaongkir: 20, id_flightapi: 958 },
            { id: 4, nama: "BANDAR LAMPUNG", id_rajaongkir: 21, id_flightapi: 7381 },
            { id: 5, nama: "BANDUNG", id_rajaongkir: 23, id_flightapi: 596 },
            { id: 8, nama: "BANJARMASIN", id_rajaongkir: 36, id_flightapi: 591 },
            { id: 9, nama: "BATAM", id_rajaongkir: 48, id_flightapi: 956 },
            { id: 13, nama: "BENGKULU", id_rajaongkir: 62, id_flightapi: 763 },
            { id: 14, nama: "BIMA", id_rajaongkir: 69, id_flightapi: 813 },
            { id: 19, nama: "BONTANG", id_rajaongkir: 89, id_flightapi: 1055 },
            { id: 23, nama: "CIREBON", id_rajaongkir: 109, id_flightapi: 1139 },
            { id: 24, nama: "DENPASAR", id_rajaongkir: 114, id_flightapi: 1832 },
            { id: 26, nama: "DUMAI", id_rajaongkir: 120, id_flightapi: 1885 },
            { id: 27, nama: "GORONTALO", id_rajaongkir: 130, id_flightapi: 2660 },
            { id: 28, nama: "GUNUNGSITOLI", id_rajaongkir: 137, id_flightapi: 2574 },
            { id: 34, nama: "JAMBI", id_rajaongkir: 156, id_flightapi: 1748 },
            { id: 35, nama: "JAYAPURA", id_rajaongkir: 158, id_flightapi: 1751 },
            { id: 37, nama: "KENDARI", id_rajaongkir: 182, id_flightapi: 3541 },
            { id: 46, nama: "MALANG", id_rajaongkir: 256, id_flightapi: 4684 },
            { id: 47, nama: "MANADO", id_rajaongkir: 267, id_flightapi: 4492 },
            { id: 48, nama: "MATARAM", id_rajaongkir: 276, id_flightapi: 250 },
            { id: 49, nama: "MEDAN", id_rajaongkir: 278, id_flightapi: 4529 },
            { id: 52, nama: "PADANG", id_rajaongkir: 318, id_flightapi: 5723 },
            { id: 57, nama: "PALEMBANG", id_rajaongkir: 327, id_flightapi: 5870 },
            { id: 59, nama: "PALU", id_rajaongkir: 329, id_flightapi: 5879 },
            { id: 66, nama: "PEKANBARU", id_rajaongkir: 350, id_flightapi: 5855 },
            { id: 68, nama: "PONTIANAK", id_rajaongkir: 365, id_flightapi: 5916 },
            { id: 71, nama: "SABANG", id_rajaongkir: 384, id_flightapi: 6590 },
            { id: 73, nama: "SAMARINDA", id_rajaongkir: 387, id_flightapi: 6974 },
            { id: 75, nama: "SEMARANG", id_rajaongkir: 399, id_flightapi: 6972 },
            { id: 80, nama: "SORONG", id_rajaongkir: 425, id_flightapi: 6911 },
            { id: 84, nama: "SURABAYA", id_rajaongkir: 444, id_flightapi: 7038 },
            { id: 88, nama: "TANJUNG BALAI", id_rajaongkir: 459, id_flightapi: 7363 },
            { id: 89, nama: "TANJUNG PINANG", id_rajaongkir: 462, id_flightapi: 7457 },
            { id: 90, nama: "TARAKAN", id_rajaongkir: 467, id_flightapi: 7529 },
            { id: 91, nama: "TASIKMALAYA", id_rajaongkir: 469, id_flightapi: 7565 },
            { id: 94, nama: "TERNATE", id_rajaongkir: 477, id_flightapi: 7571 },
            { id: 98, nama: "YOGYAKARTA", id_rajaongkir: 501, id_flightapi: 3406 },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("kota", null, {});
    },
};
