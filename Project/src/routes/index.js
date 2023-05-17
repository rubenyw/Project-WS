const express = require("express");
const router = express.Router();

const {
    registerSender,
    registerTraveller,
    loginSender,
    loginTraveller,
    sendBarang,
} = require("../controllers/user");

// Router untuk Akun
router.post("/sender/register", registerSender);
router.post("/traveller/register", registerTraveller);
router.post("/sender/login", loginSender);
router.post("/traveller/login", loginTraveller);
router.post("/sender/request", sendBarang);

// Router untuk barang

module.exports = router;
