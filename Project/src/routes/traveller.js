const express = require("express");
const router = express.Router();

// Middleware Init
const { checkApiKey } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK APIKEY
const { checkRoles } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK ROLES

// TRAVELLER
const { registerTraveller, loginTraveller, uploadKTP } = require("../controllers/user");
const { terima_request } = require("../controllers/barang");
const {
    set_perjalanan,
    complete_trip,
    traveller_lihat_riwayat,
    traveller_lihat_request,
    lihat_listbarang_traveller,
} = require("../controllers/perjalanan");
const { tarik_saldo, cek_saldo } = require("../controllers/saldo");

// Router untuk Akun
router.post("/upload/traveller", uploadKTP);
router.post("/login/traveller", loginTraveller);
router.post("/register/traveller", registerTraveller);

// Middleware
router.use("/traveller/request", [checkApiKey, checkRoles("Traveller")]);

// Router untuk barang
router.post("/traveller/request/free/terima_request", terima_request);

// Router untuk perjalanan
router.put("/traveller/request/free/complete_trip", complete_trip);
router.post("/traveller/request/pay/set_perjalanan", set_perjalanan);
router.get("/traveller/request/free/lihat_riwayat", traveller_lihat_riwayat);
router.get("/traveller/request/free/lihat_listbarang_traveller", lihat_listbarang_traveller);

// Router untuk saldo
router.get("/traveller/request/free/cek_saldo", cek_saldo);
router.post("/traveller/request/free/tarik_saldo", tarik_saldo);
module.exports = router;
