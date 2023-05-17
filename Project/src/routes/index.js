const express = require("express");
const router = express.Router();

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

// Router untuk barang

// Router untuk debuggin sementara
const { tempQuery } = require("../controllers/temp");
router.get("/bug", tempQuery);

module.exports = router;
