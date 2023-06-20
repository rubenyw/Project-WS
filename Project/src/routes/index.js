// Inisialisasi
const express = require("express");
const router = express.Router();

// DEBUGGING
const { insertRajaOngkir, insertAviation, insertKota } = require("../controllers/temp_createdatabase");

// Router untuk debuggin sementara
router.get("/raja_ongkir", insertRajaOngkir);
router.get("/aviation", insertAviation);
router.get("/kota", insertKota);

// testing API, nanti Delete
const { testing, city, country } = require("../controllers/temp_testapi.js");
router.post("/test", testing);
router.post("/city", city);
router.post("/country", country);

module.exports = router;
