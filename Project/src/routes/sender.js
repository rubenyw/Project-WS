const express = require("express");
const router = express.Router();

// Middleware Init
const { checkApiKey } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK APIKEY
const { checkRoles } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK Roles
// SENDER
const { registerSender, loginSender } = require("../controllers/user"); // Variabel function untuk Akun
const { kirim_barang, edit_barang } = require("../controllers/barang"); // Variabel function untuk request barang

const {
    topup_kuota,
    topup_saldo,
    cek_saldo,
    tarik_saldo,
} = require("../controllers/saldo"); // Variabel function untuk request kuota dan perjalan

// Router untuk Register Login Sender
router.post("/register/sender", registerSender);
router.post("/login/sender", loginSender);

// Middleware untuk Sender
router.use("/sender/request", [checkApiKey, checkRoles("Sender")]);

// Router untuk request
router.post("/sender/request/kirim_barang", kirim_barang);
router.put("/sender/request/edit_barang", edit_barang);
router.post("/sender/request/topup_kuota", topup_kuota);

module.exports = router;
