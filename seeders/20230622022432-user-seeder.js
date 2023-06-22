"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("user", [
            {
                id: 1,
                username: "test1",
                password: "12345678",
                email: "test1@gmail.com",
                no_hp: "0123456789",
                api_key: "gSkyFoaX2X",
                api_hit: 9310,
                role: "Sender",
                saldo: 0,
            },
            {
                id: 2,
                username: "test1",
                password: "12345678",
                email: "test1@gmail.com",
                no_hp: "0123456789",
                api_key: "aw5w1QD044",
                api_hit: 0,
                role: "Sender",
                saldo: 0,
            },
            {
                id: 3,
                username: "test1",
                password: "12345678",
                email: "test1@gmail.com",
                no_hp: "0123456789",
                api_key: "o5yY2FOrt8",
                api_hit: 0,
                role: "Sender",
                saldo: 0,
            },
            {
                id: 4,
                username: "rubenyw",
                password: "12345",
                email: "rubenyasonwinarta@gmail.com",
                no_hp: "08111111111",
                api_key: "FlKZoqcmWL",
                api_hit: 0,
                role: "Traveller",
                saldo: 780000,
            },
            {
                id: 5,
                username: "stevenH",
                password: "12345",
                email: "stevenharianto@gmail.com",
                no_hp: "08111111111",
                api_key: "nuq6HfwMtx",
                api_hit: 0,
                role: "Traveller",
                saldo: 0,
            },
            {
                id: 6,
                username: "stevenH",
                password: "12345",
                email: "stevenharianto@gmail.com",
                no_hp: "08111111111",
                api_key: "V5HDU1LQks",
                api_hit: 0,
                role: "Traveller",
                saldo: 0,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("user", null, {});
    },
};
