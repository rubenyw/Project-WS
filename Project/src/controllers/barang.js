const { default: axios } = require("axios");
const express = require("express");
const Joi = require("joi");

const Barang = require("../models/Barang");

const requestKirimBarang = async (req, res) => {
    const schema = Joi.object({
        nama_barang: Joi.string().required(),
        berat_barang: Joi.number().required(),
        asal_barang: Joi.string().required(),
        tujuan_barang: Joi.string().required(),
    });

    try {
        await schema.validateAsync(req.body);
    } catch (error) {
        return res.status(404).json({
            status: 404,
            msg: error.toString(),
        });
    }
};

const requestEditBarang = async (req, res) => {
    let id_kirimBarang = req.query.id_kirimBarang;
    const barang = await Barang.findByPk(id_kirimBarang);
    if (!barang) {
        return res.status(404).json({
            status: 404,
            msg: "Kode Barang tidak valid!",
        });
    }

    const schema = Joi.object({
        nama_barang: Joi.string().required(),
        berat_barang: Joi.number().required(),
        asal_barang: Joi.string().required(),
        tujuan_barang: Joi.string().required(),
    });

    try {
        await schema.validateAsync(req.body);
    } catch (error) {
        return res.status(404).json({
            status: 404,
            msg: error.toString(),
        });
    }
};

module.exports = {
    requestKirimBarang,
    requestEditBarang,
};
