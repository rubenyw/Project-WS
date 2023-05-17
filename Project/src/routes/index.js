// Inisialisasi
const express = require("express");
const router = express.Router();

// Variabel function untuk Akun
const {
    registerSender,
    registerTraveller,
    loginSender,
    loginTraveller,
} = require("../controllers/user");

// Router untuk Akun
router.post("/sender/register", registerSender);
router.post("/traveller/register", registerTraveller);
router.post("/sender/login", loginSender);
router.post("/traveller/login", loginTraveller);

// Variabel function untuk barang
const {
    requestKirimBarang,
    requestEditBarang,
} = require("../controllers/barang");

// Router untuk barang
router.post("/sender/requestKirimBarang", requestKirimBarang);
router.put("/sender/requestEditBarang", requestEditBarang);

// Router untuk debuggin sementara
const { tempQuery } = require("../controllers/temp");
router.get("/bug", tempQuery);

module.exports = router;
