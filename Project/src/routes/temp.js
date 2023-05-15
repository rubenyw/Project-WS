const express = require("express");
const { tempQuery } = require("../controllers/temp");

const router = express.Router();

router.get("/", tempQuery);

module.exports = router;
