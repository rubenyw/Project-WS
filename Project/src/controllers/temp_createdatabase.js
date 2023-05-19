const { default: axios } = require("axios");

const Kota = require("../models/Kota");

// Untuk insert kota
const tempQuery = async (req, res) => {
    try {
        const result = await axios.get(
            "https://api.rajaongkir.com/starter/city",
            {
                headers: {
                    key: "59162edb62cc968ea7148fc4833d2316",
                },
            }
        );
        for (let i = 0; i < result.data.rajaongkir.results.length; i++) {
            const element = result.data.rajaongkir.results[i];

            if (element.type == "Kota") {
                await Kota.create({
                    id: element.city_id,
                    nama: element.city_name.toUpperCase(),
                });
            }
        }
        return res.status(201).json({
            msg: result.data.rajaongkir.results,
        });
    } catch (error) {
        return res.status(201).json({
            msg: "Ha",
        });
    }
};

module.exports = {
    tempQuery,
};
