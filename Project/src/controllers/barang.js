const Barang = require("../models/Barang");
const Rating = require("../models/Rating");
const Perjalanan = require("../models/Perjalanan");
const BarangPerjalanan = require("../models/BarangPerjalanan");
const Rajaongkir = require("../models/Rajaongkir");
const Kota = require("../models/Kota");
const axios = require("axios");

const { kirim, edit, terima, rate } = require("../validation/barang");
const User = require("../models/User");

const KEY_RAJAONGKIR = "151b960f3d5589e2784650bc5c992e89";

// STEVEN PUNYA
const kirim_barang = async (req, res) => {
    const { error, value } = kirim.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    // Insert Barang
    const { nama_barang, berat_barang, asal_barang, tujuan_barang } = req.body;
    let api_key = req.headers["x-auth-token"];

    // Find User
    const user = await User.findOne({
        where: {
            api_key: api_key,
        }, // Only retrieve the id column
    });

    let berat_gram = berat_barang * 1000;

    // Find Kota
    let asal_id = await Kota.findOne({
        where: {
            nama: asal_barang,
        },
        attributes: ["id", "id_rajaongkir"],
    });
    let tujuan_id = await Kota.findOne({
        where: {
            nama: tujuan_barang,
        },
        attributes: ["id", "id_rajaongkir"],
    });

    if (asal_id == null) {
        return res.status(404).json({
            status: 404,
            msg: "Kota Asal Barang tidak ditemukan",
        });
    }
    if (tujuan_id == null) {
        return res.status(404).json({
            status: 404,
            msg: "Kota Tujuan Barang tidak ditemukan",
        });
    }
    id_asal = asal_id.id;
    id_tujuan = tujuan_id.id;

    asal_id = asal_id.id_rajaongkir;
    tujuan_id = tujuan_id.id_rajaongkir;

    // Find Harga
    const options = {
        method: "post",
        url: "https://api.rajaongkir.com/starter/cost",
        headers: {
            key: KEY_RAJAONGKIR,
            "content-type": "application/x-www-form-urlencoded",
        },
        data: "origin=" + asal_id + "&destination=" + tujuan_id + "&weight=" + berat_gram + "&courier=jne",
    };

    let harga_barang = 0;

    async function fetchTotalHarga() {
        try {
            const response = await axios(options);
            const parsedBody = response.data;
            console.log(response);
            let harga_barang = parsedBody.rajaongkir.results[0].costs[0].cost[0].value;

            for (const x of parsedBody.rajaongkir.results[0].costs) {
                if (harga_barang > x.cost[0].value) {
                    harga_barang = x.cost[0].value;
                }
            }

            return harga_barang;
        } catch (error) {
            console.error(error);
        }
    }
    harga_barang = await fetchTotalHarga();

    // Insert DB Barang
    const newBarang = await Barang.create({
        id_sender: user.id,
        nama: nama_barang,
        berat: berat_barang,
        harga: harga_barang,
        id_kota_keberangkatan: id_asal,
        id_kota_tujuan: id_tujuan,
        status: "PENDING",
    });

    return res.status(202).json({
        status: 202,
        msg: "Berhasil Menambahkan Barang Dengan ID : " + newBarang.id,
    });
};

// STEVEN PUNYA
const edit_barang = async (req, res) => {
    const { error, value } = edit.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }
    const { id_barang } = req.body;

    let getBarang = await Barang.findOne({
        where: {
            id: id_barang,
        },
    });

    // Check if exist
    if (getBarang == null) {
        return res.status(404).json({
            status: 404,
            msg: "Barang tidak ditemukkan",
        });
    }
    // Check if "PENDING"
    if (getBarang.status != "PENDING") {
        return res.status(404).json({
            status: 404,
            msg: "Barang tidak bisa di edit karena sudah diambil traveller",
        });
    }

    let nama_barang = req.body.nama_barang ? req.body.nama_barang : getBarang.nama;
    let berat_barang = req.body.berat_barang ? req.body.berat_barang : getBarang.berat;
    let asal_barang = req.body.asal_barang ? req.body.asal_barang : getBarang.id_kota_keberangkatan;
    let tujuan_barang = req.body.tujuan_barang ? req.body.tujuan_barang : getBarang.id_kota_tujuan;

    if (req.body.asal_barang) {
        let asal_id = await Kota.findOne({
            where: {
                nama: asal_barang,
            },
            attributes: ["id_rajaongkir"],
        });
        if (asal_id == null) {
            return res.status(404).json({
                status: 404,
                msg: "Kota Asal Barang tidak ditemukan",
            });
        }
        asal_barang = asal_id.id_ongkir;
    }
    if (req.body.tujuan_barang) {
        let tujuan_id = await Kota.findOne({
            where: {
                nama: tujuan_barang,
            },
            attributes: ["id_rajaongkir"],
        });
        if (tujuan_id == null) {
            return res.status(404).json({
                status: 404,
                msg: "Kota Tujuan Barang tidak ditemukan",
            });
        }
        tujuan_barang = tujuan_id.id_rajaongkir;
    }

    let berat_gram = berat_barang * 1000;
    // Update Harga
    const options = {
        method: "post",
        url: "https://api.rajaongkir.com/starter/cost",
        headers: {
            key: KEY_RAJAONGKIR,
            "content-type": "application/x-www-form-urlencoded",
        },
        data: "origin=" + asal_barang + "&destination=" + tujuan_barang + "&weight=" + berat_gram + "&courier=jne",
    };

    let harga_barang = 0;

    async function fetchTotalHarga() {
        try {
            const response = await axios(options);
            const parsedBody = response.data;
            console.log(parsedBody);
            let harga_barang = parsedBody.rajaongkir.results[0].costs[0].cost[0].value;

            for (const x of parsedBody.rajaongkir.results[0].costs) {
                if (harga_barang > x.cost[0].value) {
                    harga_barang = x.cost[0].value;
                }
            }

            return harga_barang;
        } catch (error) {
            console.error(error);
        }
    }
    harga_barang = await fetchTotalHarga();

    // Update Barang
    await Barang.update(
        {
            nama: nama_barang,
            berat: berat_barang,
            harga: harga_barang,
            id_kota_keberangkatan: asal_barang,
            id_kota_tujuan: tujuan_barang,
        },
        {
            where: {
                id: getBarang.id,
            },
        }
    );

    return res.status(202).json({
        status: 202,
        msg: "Barang telah diubah!",
    });
};

// STEVEN PUNYA
const lacak_barang = async (req, res) => {
    const { id_barang } = req.body;
    let api_key = req.headers["x-auth-token"];

    let getUser = await User.findOne({
        where: {
            api_key: api_key,
        },
    });

    let getBarang = await Barang.findOne({
        where: {
            id: id_barang,
        },
    });

    if (getBarang == null) {
        return res.status(404).json({
            status: 404,
            msg: "Barang tidak ditemukan!",
        });
    }
    // Check If Barang milik user
    if (getBarang.id_sender != getUser.id) {
        return res.status(403).json({
            status: 403,
            msg: "Barang bukan milik user!",
        });
    }

    // Check Status
    let status = getBarang.status;
    let durasi = 0;
    let strStatus = "";
    let strDurasi = "-";
    if (status == "PENDING") {
        strStatus = "Barang belum diambil traveller";
    } else if (status == "ONGOING") {
        strStatus = "Barang telah diambil kurir";

        // Get BarangPerjalanan
        let getBarangPerjalanan = await BarangPerjalanan.findOne({
            where: {
                id_barang: getBarang.id,
            },
        });

        // Get Perjalanan
        let getPerjalanan = await Perjalanan.findOne({
            where: {
                id: getBarangPerjalanan.id_perjalanan,
            },
        });

        let waktu_keberangkatan = new Date(getPerjalanan.waktu_keberangkatan);
        const now = new Date();

        const tempDurasi = Math.floor((now.getTime() - waktu_keberangkatan.getTime()) / 60000);

        console.log("Waktu Keberangkatan: " + waktu_keberangkatan);
        console.log("Perbedaan: " + tempDurasi);

        durasi = getPerjalanan.durasi - tempDurasi;
        strDurasi = "Barang akan sampai di tujuan dalam " + durasi + " menit";
    } else {
        // DONE
        strStatus = "Barang telah sampai tujuan";
    }

    return res.status(200).json({
        status: 200,
        body: {
            kode_barang: getBarang.id,
            status: strStatus,
            durasi: strDurasi,
        },
    });
};

// RD PUNYA
//sementara
const batalkan_barang = async (req, res) => {
    const barang = req.body.id_barang;
    let databarang = await BarangPerjalanan.findOne({
        where: {
            id_barang: barang,
        },
    });
    if (databarang) {
        return res.status(400).send({ message: `kiriman sudah diambil traveller` });
    }
    const result = await Barang.update({ status: "CANCELLED" }, { where: { id: barang } });

    return res.status(200).send({ message: `Kiriman dibatalkan` });
};

// RD PUNYA
const lihat_request = async (req, res) => {
    const listbarang = await Barang.findAll({
        where: {
            status: "PENDING",
        },
    });
    for (let index = 0; index < listbarang.length; index++) {
        const element = listbarang[index];
        let user = await User.findByPk(element.dataValues.id_sender);
        listbarang[index].dataValues.Nama_Sender = user.username;
    }
    return res.status(200).send({ message: listbarang });
};

// RUBEN PUNYA
const terima_request = async (req, res) => {
    const { error, value } = terima.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    let request = await Barang.findOne({ where: { id: req.body.id_barang } });
    if (!request) {
        return res.status(400).json({
            status: 400,
            msg: "Barang tidak ada",
        });
    }
    if (request.dataValues.status != "PENDING") {
        return res.status(400).json({
            status: 400,
            msg: "Barang sudah diambil traveller lain",
        });
    }

    let perjalanan = await Perjalanan.findOne({
        where: {
            id_traveller: req.pengguna.dataValues.id,
            id_kota_keberangkatan: request.dataValues.id_kota_keberangkatan,
            id_kota_tujuan: request.dataValues.id_kota_tujuan,
        },
    });
    if (!perjalanan) {
        return res.status(400).json({
            status: 400,
            msg: "Tidak ada perjalanan yang sesuai dengan rute barang",
        });
    }

    let result = await BarangPerjalanan.create({
        id_perjalanan: perjalanan.dataValues.id,
        id_barang: req.body.id_barang,
    });

    return res.status(201).json({
        status: 201,
        result,
    });
};

// RD PUNYA
// cmn di database
const complete_request = async (req, res) => {
    const barang = req.body.id_barang;
    let databarang = await Barang.findOne({
        where: {
            id: barang,
        },
    });
    if (!databarang) {
        return res.status(404).json({
            status: 404,
            msg: "Barang not found",
        });
    }
    databarang.update({
        status: "DONE",
    });
    return res.status(200).send({ message: `${barang} telah selesai dikirim` });
};

// RUBEN PUNYA
const rating = async (req, res) => {
    const { error, value } = rate.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    let cek_barang = await Barang.findByPk(req.body.id_barang);
    if (!cek_barang) {
        return res.status(404).json({
            status: 404,
            msg: `Tidak ditemukan barang dengan ID '${req.body.id_barang}`,
        });
    }
    if (cek_barang.dataValues.id_sender != req.pengguna.dataValues.id) {
        return res.status(404).json({
            status: 404,
            msg: `Barang bukan milik anda`,
        });
    }
    if (cek_barang.dataValues.status == "PENDING") {
        return res.status(404).json({
            status: 404,
            msg: `Barang belum diangkut dalam perjalanan`,
        });
    }

    let perjalanan = await Perjalanan.findByPk(cek_barang.dataValues.id_perjalanan);
    if (perjalanan.dataValues.status == "ONGOING") {
        return res.status(400).json({
            status: 404,
            msg: `Barang masih dalam perjalanan`,
        });
    }

    const result = await Rating.create({
        id_sender: req.user.dataValues.id,
        id_traveller: perjalanan.dataValues.id_traveller,
        rate: req.body.rating,
    });

    return res.status(200).json({
        status: 200,
        msg: result,
    });
};

module.exports = {
    kirim_barang,
    edit_barang,
    lacak_barang,
    batalkan_barang,
    lihat_request,
    terima_request,
    complete_request,
    rating,
};
