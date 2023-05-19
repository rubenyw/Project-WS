const Barang = require("../models/Barang");

const { kirim, edit } = require("../validation/barang");

const kirim_barang = async (req, res) => {
    try {
        await kirim.validateAsync(req.body);
    } catch (error) {
        return res.status(404).json({
            status: 404,
            msg: error.toString(),
        });
    }

    const body = req.body;
    return res.status(202).json({
        status: 202,
        msg: "SUCCEED",
    });
};

const edit_barang = async (req, res) => {
    let id_kirimBarang = req.query.id_kirimBarang;
    const barang = await Barang.findByPk(id_kirimBarang);
    if (!barang) {
        return res.status(404).json({
            status: 404,
            msg: "Kode Barang tidak valid!",
        });
    }

    try {
        await edit.validateAsync(req.body);
    } catch (error) {
        return res.status(404).json({
            status: 404,
            msg: error.toString(),
        });
    }

    const brng = await Barang.findAll();
    return res.status(202).json({
        status: 202,
        msg: "SUCCEED",
    });
};

const lacak_barang = async (req, res) => {};
const batalkan_barang = async (req, res) => {};
const lihat_request = async (req, res) => {};
const terima_request = async (req, res) => {};
const complete_request = async (req, res) => {};

module.exports = {
    kirim_barang,
    edit_barang,
    lacak_barang,
    batalkan_barang,
    lihat_request,
    terima_request,
    complete_request,
};
