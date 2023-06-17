const express = require("express");
const router = express.Router();

// Middleware Init
const { checkApiKey } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK APIKEY
const { checkRoles } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK Roles
const { checkKuota } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK Roles
// SENDER
const { registerSender, loginSender } = require("../controllers/user"); // Variabel function untuk Akun
const { kirim_barang, edit_barang, rating, batalkan_barang,lihat_request } = require("../controllers/barang"); // Variabel function untuk request barang
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
router.get("/sender/request/free/lihat_request", lihat_request);
router.delete("/sender/request/free/batalkan_barang", batalkan_barang);
router.post("/sender/request/free/rating", rating);

module.exports = router;
