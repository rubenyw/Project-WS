const express = require("express");
const router = express.Router();

// Middleware Init
const { checkApiKey } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK APIKEY
const { checkRoles } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK Roles
// SENDER
const { registerSender, loginSender } = require("../controllers/user"); // Variabel function untuk Akun
const {
    requestKirimBarang,
    requestEditBarang,
} = require("../controllers/barang"); // Variabel function untuk request barang

const {
    topup_apihit,
    setRequestPerjalanan,
    lihatRequestPerjalanan,
    rating,
} = require("../controllers/request"); // Variabel function untuk request kuota dan perjalan

// Router untuk Register Login Sender
router.post("/register/sender", registerSender);
router.post("/login/sender", loginSender);

// Middleware untuk Sender
router.use("/sender/request", [checkApiKey, checkRoles("Sender")]);

// Router untuk request
router.post("/sender/request/kirim_barang", requestKirimBarang);
router.put("/sender/request/edit_barang", requestEditBarang);
router.post("/sender/request/topup", topup_apihit);

module.exports = router;
