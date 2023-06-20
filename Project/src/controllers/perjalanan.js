const { default: axios } = require("axios");
const { set, checkFlight } = require("../validation/perjalanan");

const Kota = require("../models/Kota");
const Perjalanan = require("../models/Perjalanan");
const Barang = require("../models/Barang");
const Rating = require("../models/Rating");
const BarangPerjalanan = require("../models/BarangPerjalanan");
const Aviation = require("../models/Aviation");
const Rajaongkir = require("../models/Rajaongkir");

// RD PUNYA
const cek_harga_durasi = async (req, res) => {};

// RUBEN PUNYA
const set_perjalanan = async (req, res) => {
    const { error, value } = set.validate(req.body, { abortEarly: false });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }
    let Errors = [];
    const berangkat = await Kota.findOne({
        where: { nama: req.body.kota_keberangkatan.toUpperCase() },
    });

    if (!berangkat) Errors.push("Kota Keberangkatan tidak terdaftar");

    const tujuan = await Kota.findOne({
        where: { nama: req.body.kota_tujuan.toUpperCase() },
    });

    if (!tujuan) Errors.push("Kota Tujuan tidak terdaftar");

    if (Errors.length > 0) {
        return res.status(404).json({
            status: 404,
            msg: Errors,
        });
    }

    const arrival = await Aviation.findByPk(tujuan.dataValues.id_flightapi);
    const departure = await Aviation.findByPk(berangkat.dataValues.id_flightapi);

    const params = {
        access_key: "7639c0479301fe4cb3fff6fc87308683",
        limit: 10000,
        arr_iata: arrival.dataValues.iata_code,
        dep_iata: departure.dataValues.iata_code,
    };

    const temp = await axios.get("http://api.aviationstack.com/v1/flights", {
        params,
    });
    console.log(temp.data.data[0]);
    if (temp.data.pagination.total == 0) {
        return res.status(404).json({
            status: 404,
            msg: "Belum ada penerbangan dengan rute ini",
        });
    }
    const pengguna = req.pengguna;
    const id_traveller = pengguna.dataValues.id;
    const id_kota_keberangkatan = berangkat.dataValues.id;
    const id_kota_tujuan = tujuan.dataValues.id;
    const status = "ONGOING";

    const departureTime = new Date(temp.data.data[0].departure.scheduled);
    const arrivalTime = new Date(temp.data.data[0].arrival.scheduled);

    const durasi = (arrivalTime.getTime() - departureTime.getTime()) / (1000 * 60);

    const result = await Perjalanan.create({
        id_traveller,
        id_kota_keberangkatan,
        id_kota_tujuan,
        status,
        durasi,
    });

    return res.status(200).json({
        status: 201,
        result,
    });
};

// RD PUNYA
//blm selesai
const sender_lihat_riwayat = async (req, res) => {
    const listbarang = await Barang.findAll({
        attributes: ["id", "id_sender", "nama"],
        where: {
            id_sender: req.pengguna.dataValues.id,
        },
    });
};

//BLM PUNYA
const traveller_lihat_riwayat = async (req, res) => {};

// RUBEN PUNYA
const complete_trip = async (req, res) => {
    const { error, value } = checkFlight.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    const check = await Perjalanan.findByPk(req.body.id_perjalanan);
    if (!check) {
        return res.status(404).json({
            status: 404,
            msg: "Perjalanan tidak terdaftar",
        });
    }

    if (req.pengguna.dataValues.id != check.dataValues.id_traveller) {
        return res.status(400).json({
            status: 400,
            msg: "Anda tidak terdaftar dalam perjalanan ini",
        });
    }

    let result = await Perjalanan.findByPk(req.body.id_perjalanan);
    result.update({ status: "DONE" });
    result.save();

    let barangperjalanan = await BarangPerjalanan.findAll({
        where: { id_perjalanan: req.body.id_perjalanan },
    });

    let body = {};
    body.result = result;
    body.update = [];
    console.log(body);
    for (let i = 0; i < barangperjalanan.length; i++) {
        const element = barangperjalanan[i];
        let temp = await Barang.findByPk(element.dataValues.id_barang);
        temp.update({ status: "DONE" });
        temp.save();
        body.update.push(temp);
    }

    return res.status(201).json({
        status: 201,
        body,
    });
};

module.exports = {
    cek_harga_durasi,
    set_perjalanan,
    sender_lihat_riwayat,
    traveller_lihat_riwayat,
    complete_trip,
};
