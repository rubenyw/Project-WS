const { default: axios } = require("axios");
const express = require("express");
const Joi = require("joi");

const Kota = require("../models/Kota");
const Barang = require("../models/Barang");
const { Op } = require("sequelize");

const checkAsalKota = async (asal_barang) => {
    const result = await Kota.findOne({
        where: {
            nama: asal_barang.toUpperCase(),
        },
    });

    if (!result) throw new Error("Asal Kota tidak ditemukan");
};

const checkTujuanKota = async (tujuan_barang) => {
    const result = await Kota.findOne({
        where: {
            nama: tujuan_barang.toUpperCase(),
        },
    });
    console.log(result);
    if (!result) throw new Error("Tujuan Kota tidak ditemukan");
};

const requestKirimBarang = async (req, res) => {
    const schema = Joi.object({
        nama_barang: Joi.string().required(),
        berat_barang: Joi.number().required(),
        asal_barang: Joi.string().required().external(checkAsalKota),
        tujuan_barang: Joi.string().required().external(checkTujuanKota),
    });

    try {
        await schema.validateAsync(req.body);
        const { nama_barang, berat_barang, asal_barang, tujuan_barang } =
            req.body;
        const newAsalBarang = await Kota.findOne({
            where: {
                nama: asal_barang,
            },
        });
        const newTujuanBarang = await Kota.findOne({
            where: {
                nama: tujuan_barang,
            },
        });
        // const newBarang = await Barang.create({
        //     nama: nama_barang,
        //     berat: berat_barang,
        //     id_kota_keberangkatan: newAsalBarang.id,
        //     id_kota_tujuan: newTujuanBarang.id,
        // });
        return res.status(200).json({ message: "test" });
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
