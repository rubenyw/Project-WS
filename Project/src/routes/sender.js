const express = require("express");
const router = express.Router();

// Middleware Init
const { checkApiKey } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK APIKEY
const { checkRoles } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK Roles
const { checkKuota } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK Roles
// SENDER
const { registerSender, loginSender } = require("../controllers/user"); // Variabel function untuk Akun
const { kirim_barang, edit_barang } = require("../controllers/barang"); // Variabel function untuk request barang
const { topup_kuota, topup_saldo } = require("../controllers/saldo"); // Variabel function untuk request saldo

// Router untuk Register Login Sender
router.post("/register/sender", registerSender);
router.post("/login/sender", loginSender);

// Middleware untuk Sender
router.use("/sender/request", [checkApiKey, checkRoles("Sender")]);
router.use("/sender/request/pay", [checkKuota]);

// Router untuk request
router.post("/sender/request/pay/kirim_barang", kirim_barang);
router.put("/sender/request/pay/edit_barang", edit_barang);
router.post("/sender/request/free/topup_kuota", topup_kuota);

module.exports = router;
