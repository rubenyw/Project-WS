const express = require("express");
const router = express.Router();

// Middleware Init
const { checkApiKey } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK APIKEY
const { checkRoles } = require("../middleware/ApiKey"); // MIDDLEWARE CHECK ROLES

// TRAVELLER
// Variabel function untuk Akun
const { registerTraveller, loginTraveller } = require("../controllers/user");
// Router untuk Akun
router.post("/register/traveller", registerTraveller);
router.post("/login/traveller", loginTraveller);

module.exports = router;
