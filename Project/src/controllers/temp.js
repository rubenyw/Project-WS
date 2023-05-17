const { default: axios } = require("axios");
const express = require("express");
const Joi = require("joi");

const Kota = require("../models/Kota");

// Untuk insert kota
const tempQuery = async (req, res) => {
    try {
        const result = await axios.get(
            "https://api.rajaongkir.com/starter/city",
            {
                headers: {
                    key: "59162edb62cc968ea7148fc4833d2316",
                },
            }
        );
        let index = 1;
        for (let i = 0; i < result.data.rajaongkir.results.length; i++) {
            const element = result.data.rajaongkir.results[i];
            if (element.type == "Kota")
                await Kota.create({
                    id: element.city_id,
                    nama: element.city_name,
                });
        }
        return res.status(201).json({
            msg: result.data.rajaongkir.results,
        });
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            msg: "Ha",
        });
    }
};

module.exports = {
    tempQuery,
};
