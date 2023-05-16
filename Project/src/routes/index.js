const express = require("express");
const router = express.Router();

const { registerSender, registerTraveller, loginSender, loginTraveller } = require("../controllers/user");

router.post("/sender/register", registerSender);
router.post("/traveller/register", registerTraveller);
router.post("/sender/login", loginSender);
router.post("/traveller/login", loginTraveller);

module.exports = router;
