const { default: axios } = require("axios");
const express = require("express");
const Joi = require("joi");

const Temp = require("../models/temp");

const tempQuery = async (req, res) => {
    const result = await axios.get("https://api.rajaongkir.com/starter/city", {
        id: 39,
        province: 5,
    });
    console.log(result);
    return res.status(201).json({
        msg: "Ha",
    });
};

module.exports = {
    tempQuery,
};
