const { default: axios } = require("axios");
const { set, checkFlight } = require("../validation/perjalanan");

const User = require("../models/User");
const Kota = require("../models/Kota");
const Barang = require("../models/Barang");
const Rating = require("../models/Rating");
const Aviation = require("../models/Aviation");
const Rajaongkir = require("../models/Rajaongkir");
const Perjalanan = require("../models/Perjalanan");
const BarangPerjalanan = require("../models/BarangPerjalanan");

const KEY_RAJAONGKIR = "151b960f3d5589e2784650bc5c992e89";

// STEVEN PUNYA
const cek_harga_durasi = async (req, res) => {
    const { asal_barang, tujuan_barang } = req.body;

    // Find Kota
    let asal_id = await Kota.findOne({
        where: {
            nama: asal_barang,
        },
        attributes: ["id_rajaongkir"],
    });
    let tujuan_id = await Kota.findOne({
        where: {
            nama: tujuan_barang,
        },
        attributes: ["id_rajaongkir"],
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
        data: "origin=" + asal_id + "&destination=" + tujuan_id + "&weight=1000&courier=jne",
    };

    let harga_barang = 0;

    async function fetchTotalHarga() {
        try {
            const response = await axios(options);
            const parsedBody = response.data;
            let harga_barang = parsedBody.rajaongkir.results[0].costs[0].cost[0].value;

            for (const x of parsedBody.rajaongkir.results[0].costs) {
                if (harga_barang > x.cost[0].value) {
                    harga_barang = x.cost[0].value;
                }
            }

            return harga_barang;
        } catch (error) {
            console.error("Error: " + error);
        }
    }
    harga_barang = await fetchTotalHarga();

    return res.status(200).json({
        status: 200,
        msg: "Harga dari " + asal_barang + " ke " + tujuan_barang + " adalah Rp " + harga_barang + " / kg",
    });
};

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

    const arrival = await Aviation.findByPk(tujuan.id_flightapi);
    const departure = await Aviation.findByPk(berangkat.id_flightapi);

    const params = {
        access_key: "7639c0479301fe4cb3fff6fc87308683",
        limit: 10000,
        arr_iata: arrival.iata_code,
        dep_iata: departure.iata_code,
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
    const id_traveller = pengguna.id;
    const id_kota_keberangkatan = berangkat.id;
    const id_kota_tujuan = tujuan.id;
    const status = "ONGOING";

    const departureTime = new Date(temp.data.data[0].departure.scheduled);
    const arrivalTime = new Date(temp.data.data[0].arrival.scheduled);

    const durasi = (arrivalTime.getTime() - departureTime.getTime()) / (1000 * 60);

    const waktu_keberangkatan = departureTime;

    const hasil = await Perjalanan.create({
        id_traveller,
        id_kota_keberangkatan,
        id_kota_tujuan,
        status,
        durasi,
        waktu_keberangkatan,
    });

    const result = {
        "ID Penerbangan": hasil.id,
        "Nama Traveller": (await User.findByPk(hasil.id_traveller)).nama,
        Departure: (await Kota.findByPk(hasil.id_kota_keberangkatan)).nama,
        Arrival: (await Kota.findByPk(hasil.id_kota_tujuan)).nama,
        "Estimasi Perjalanan": durasi + " menit",
        "Waktu Keberangkatan": waktu_keberangkatan.toUTCString(),
    };

    return res.status(200).json({
        status: 201,
        result,
    });
};

// RUBEN PUNYA
const sender_lihat_riwayat = async (req, res) => {
    /**
     * barang yang sudah dikirim
     * barang yang sedang diambil
     * barang yang belum diambil
     * barang yang dicancel
     */

    const listbarang = await Barang.findAll({
        attributes: ["id", "id_sender", "nama"],
        where: {
            id_sender: req.pengguna.id,
        },
    });

    const belum = await Barang.findAll({ where: { id_sender: req.pengguna.id, status: "PENDING" } });
    const sedng = await Barang.findAll({ where: { id_sender: req.pengguna.id, status: "ONGOING" } });
    const sudah = await Barang.findAll({ where: { id_sender: req.pengguna.id, status: "DONE" } });
    const cancl = await Barang.findAll({ where: { id_sender: req.pengguna.id, status: "CANCELLED" } });

    let result = {
        nama: req.pengguna.username,
        "barang belum diangkut": [],
        "barang sedang diangkut": [],
        "barang sudah dikirim": [],
    };

    for (let i = 0; i < belum.length; i++) {
        const element = belum[i];
        const tujuaaaan = await Kota.findByPk(element.id_kota_tujuan);
        const berangkat = await Kota.findByPk(element.id_kota_tujuan);
        result["barang belum diangkut"].push({
            "nama barang": element.nama,
            "berat barang": element.berat,
            "harga barang": element.harga,
            rute: berangkat.nama + " -> " + tujuaaaan.nama,
        });
    }
    for (let i = 0; i < sedng.length; i++) {
        const element = sedng[i];
        const tujuaaaan = await Kota.findByPk(element.id_kota_tujuan);
        const berangkat = await Kota.findByPk(element.id_kota_tujuan);
        result["barang sedang diangkut"].push({
            "nama barang": element.nama,
            "berat barang": element.berat,
            "harga barang": element.harga,
            rute: berangkat.nama + " -> " + tujuaaaan.nama,
        });
    }
    for (let i = 0; i < sudah.length; i++) {
        const element = sudah[i];
        const tujuaaaan = await Kota.findByPk(element.id_kota_tujuan);
        const berangkat = await Kota.findByPk(element.id_kota_tujuan);
        result["barang sudah dikirim"].push({
            "nama barang": element.nama,
            "berat barang": element.berat,
            "harga barang": element.harga,
            rute: berangkat.nama + " -> " + tujuaaaan.nama,
        });
    }

    return res.status(201).json({
        status: 201,
        result,
    });
};
//RD
const lihat_listbarang_traveller = async (req, res) => {
    const tujuan = req.body.tujuan;
    const asal = req.body.asal;

    const namakotatujuan = await Kota.findOne({
        where: { nama: tujuan.toUpperCase() },
    });
    const namakotaasal = await Kota.findOne({
        where: { nama: asal.toUpperCase() },
    });

    const listbarang = await Barang.findAll({
        where: { id_kota_keberangkatan: namakotaasal.id, id_kota_tujuan: namakotatujuan.id, status: "PENDING" },
    });
    let result = [];
    for (let i = 0; i < listbarang.length; i++) {
        const element = listbarang[i];
        const sender = await User.findByPk(element.id_sender);
        result.push({
            "id barang": element.id,
            "nama barang": element.nama,
            "nama pengirim": sender.username,
            "berat barang": element.berat,
            "harga barang": element.harga,
        });
    }

    return res.status(201).json({
        status: 201,
        result,
    });
};

//RUBEN PUNYA
const traveller_lihat_riwayat = async (req, res) => {
    const perjalanan = await Perjalanan.findAll({
        where: { id_traveller: req.pengguna.id, status: "DONE" },
    });

    let result = [];
    for (let i = 0; i < perjalanan.length; i++) {
        const time = perjalanan[i].waktu_keberangkatan.toISOString().split(".")[0].replace("T", " ");
        const kota_berangkat = await Kota.findByPk(perjalanan[i].id_kota_keberangkatan);
        const kota_tujuan = await Kota.findByPk(perjalanan[i].id_kota_tujuan);

        result.push({
            kota_berangkat: kota_berangkat.nama,
            kota_tujuan: kota_tujuan.nama,
            barang: [],
        });

        const barangperjalanan = await BarangPerjalanan.findAll({ where: { id_perjalanan: perjalanan[i].id } });
        for (let j = 0; j < barangperjalanan.length; j++) {
            const barang = await Barang.findByPk(barangperjalanan[j].id_barang);
            const user = await User.findByPk(barang.id_sender);
            result[i].barang.push({
                nama_barang: barang.nama,
                berat_barang: barang.berat,
                harga_barang: barang.harga,
                pengirim_barang: user.username,
            });
        }
    }
    return res.status(201).json({
        status: 201,
        result,
    });
};

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

    if (check.status == "DONE") {
        return res.status(400).json({
            status: 400,
            msg: "Perjalanan sudah tidak aktif",
        });
    }

    if (req.pengguna.id != check.id_traveller) {
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
        let temp = await Barang.findByPk(element.id_barang);
        temp.update({ status: "DONE" });
        temp.save();
        body.update.push(temp);
    }

    return res.status(201).json({
        status: 201,
        body,
    });
};

const traveller_lihat_request = async (req, res) => {
    let api_key = req.headers["x-auth-token"];

    let getUser = await User.findOne({
        where: {
            api_key: api_key,
        },
    });

    if (getUser == null) {
        return res.status(404).json({
            status: 404,
            msg: "User not found",
        });
    }

    if (getUser.role != "Traveller") {
        return res.status(403).json({
            status: 403,
            msg: "User is not traveller",
        });
    }

    let getPerjalanan = await Perjalanan.findOne({
        where: {
            id_traveller: getUser.id,
            status: "ONGOING",
        },
    });
    if (getPerjalanan == null) {
        return res.status(404).json({
            status: 404,
            msg: "Perjalanan isn't set",
        });
    }

    let getBarang = await Barang.findAll({
        where: {
            id_kota_keberangkatan: getPerjalanan.id_kota_keberangkatan,
            id_kota_tujuan: getPerjalanan.id_kota_tujuan,
            status: "PENDING",
        },
    });
    let arrBarang = [];
    for (const x of getBarang) {
        let getUserName = await User.findOne({
            where: {
                id: x.id_sender,
            },
        });
        arrBarang.push({
            id_barang: x.id,
            nama_barang: x.nama,
            nama_user: getUserName ? getUserName.username : "-",
            berat: x.berat,
            harga: x.harga,
        });
    }

    return res.status(200).json({
        status: 200,
        body: arrBarang,
    });
};

module.exports = {
    cek_harga_durasi,
    set_perjalanan,
    lihat_listbarang_traveller,
    traveller_lihat_request,
    sender_lihat_riwayat,
    traveller_lihat_riwayat,
    complete_trip,
};
