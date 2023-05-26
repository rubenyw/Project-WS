const { default: axios } = require("axios");

const Kota = require("../models/Kota");
const Aviation = require("../models/Aviation");
const Rajaongkir = require("../models/Rajaongkir");

// Untuk insert kota
const insertRajaOngkir = async (req, res) => {
    const result = await axios.get("https://api.rajaongkir.com/starter/city", {
        headers: {
            key: "59162edb62cc968ea7148fc4833d2316",
        },
    });
    let array = [];
    for (let i = 0; i < result.data.rajaongkir.results.length; i++) {
        const element = result.data.rajaongkir.results[i];
        if (element.type == "Kota") {
            const buat = await Rajaongkir.create({
                id: element.city_id,
                nama: element.city_name.toUpperCase(),
            });
            array.push(buat);
        }
    }
    return res.status(201).json({
        msg: array,
    });
};

const insertAviation = async (req, res) => {
    const params = {
        access_key: "7639c0479301fe4cb3fff6fc87308683",
        limit: 10000,
    };

    const result = await axios.get("http://api.aviationstack.com/v1/cities", {
        params,
    });
    let array = [];
    for (let i = 0; i < result.data.data.length; i++) {
        const element = result.data.data[i];
        if (element.country_iso2 == "ID") {
            const temp = await Aviation.create({
                id: element.city_id,
                nama: element.city_name.toUpperCase(),
            });
            array.push(temp);
        }
    }

    return res.status(200).json(array);
};

const insertKota = async (req, res) => {
    const aviation = await Aviation.findAll();
    const rajaongkir = await Rajaongkir.findAll();

    let array = [];
    for (let i = 0; i < rajaongkir.length; i++) {
        const element = rajaongkir[i];
        for (let j = 0; j < aviation.length; j++) {
            const item = aviation[j];
            if (element.nama == item.nama) {
                const temp = await Kota.create({
                    id: i + 1,
                    nama: element.nama,
                    id_rajaongkir: element.id,
                    id_flightapi: item.id,
                });
                array.push(temp);
            }
        }
    }

    return res.status(200).json(array);
};

module.exports = { insertRajaOngkir, insertAviation, insertKota };
