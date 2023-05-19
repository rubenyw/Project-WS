// Inisialisasi
const express = require("express");
const router = express.Router();

// Router untuk debuggin sementara
const { tempQuery } = require("../controllers/temp_createdatabase");
router.get("/bug", tempQuery);

// testing API, nanti Delete
const { testing } = require("../controllers/temp_testapi.js");
router.post("/test", testing);

module.exports = router;
