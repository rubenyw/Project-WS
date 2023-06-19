const express = require("express");
const router = express.Router();

// Middleware Init
const { checkApiKey } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK APIKEY
const { checkRoles } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK ROLES

// TRAVELLER
const { registerTraveller, loginTraveller } = require("../controllers/user");
const { terima_request } = require("../controllers/barang");
const { set_perjalanan, complete_trip } = require("../controllers/perjalanan");

// Router untuk Akun
router.post("/register/traveller", registerTraveller);
router.post("/login/traveller", loginTraveller);

// Middleware
router.use("/traveller/request", [checkApiKey, checkRoles("Traveller")]);

// Router untuk barang
router.post("/traveller/request/free/terima_request", terima_request);

// Router untuk perjalanan
router.post("/traveller/request/pay/set_perjalanan", set_perjalanan);
router.put("/traveller/request/free/complete_trip", complete_trip);
module.exports = router;
