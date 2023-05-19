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
router.post("/register/sender", registerSender);
router.post("/register/traveller", registerTraveller);
router.post("/login/sender", loginSender);
router.post("/login/traveller", loginTraveller);

// Variabel function untuk barang
const {
    requestKirimBarang,
    requestEditBarang,
} = require("../controllers/barang");

// Router untuk barang
router.post("/sender/requestKirimBarang", requestKirimBarang);
router.put("/sender/requestEditBarang", requestEditBarang);

// Variabel function untuk request
const {
    topUpRequest,
    setRequestPerjalanan,
    lihatRequestPerjalanan,
    rating,
} = require("../controllers/request");

// Variabel middleware untuk request
const { checkApiKey } = require("../middleware/request");

// Router untuk request
router.post("/sender/topupRequest");

// Router untuk debuggin sementara
const { tempQuery } = require("../controllers/temp_createdatabase");
router.get("/bug", tempQuery);

// testing API, nanti Delete
const { testing } = require("../controllers/temp_testapi.js");
router.post("/test", testing);

module.exports = router;
