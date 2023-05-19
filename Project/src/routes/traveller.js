const express = require("express");
const router = express.Router();

// Middleware Init
const { checkApiKey } = require("../middleware/request"); // MIDDLEWARE CHECK APIKEY
const { checkRoles } = require("../middleware/request"); // MIDDLEWARE CHECK ROLES

// TRAVELLER
// Variabel function untuk Akun
const { registerTraveller, loginTraveller } = require("../controllers/user");
// Router untuk Akun
router.post("/register/traveller", registerTraveller);
router.post("/login/traveller", loginTraveller);

module.exports = router;
