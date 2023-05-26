// Inisialisasi
const express = require("express");
const router = express.Router();

// Router untuk debuggin sementara
const {
    tempQuery,
    aviationQuery,
    update,
} = require("../controllers/temp_createdatabase");
router.get("/bug", tempQuery);
router.get("/create", aviationQuery);
router.get("/update", update);

// testing API, nanti Delete
const { testing, city, country } = require("../controllers/temp_testapi.js");
router.post("/test", testing);
router.post("/city", city);
router.post("/country", country);

module.exports = router;
