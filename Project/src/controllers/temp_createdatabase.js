const { default: axios } = require("axios");

const Kota = require("../models/Kota");

// Untuk insert kota
const tempQuery = async (req, res) => {
    try {
        result = await axios.get("https://api.rajaongkir.com/starter/city", {
            headers: {
                key: "59162edb62cc968ea7148fc4833d2316",
            },
        });
        let array = [];
        let id = 1;
        for (let i = 0; i < result.data.rajaongkir.results.length; i++) {
            const element = result.data.rajaongkir.results[i];

            if (element.type == "Kota") {
                const buat = await Kota.create({
                    id: id++,
                    id_rajaongkir: element.city_id,
                    id_flightapi: 0,
                    nama: element.city_name.toUpperCase(),
                });
                array.push(buat);
            }
        }
        const params = {
            access_key: "7639c0479301fe4cb3fff6fc87308683",
            limit: 10000,
        };

        result = await axios.get("http://api.aviationstack.com/v1/cities", {
            params,
        });
        let data = [];
        result.data.data.forEach((item) => {
            if (item.country_iso2 == "ID") data.push(item);
        });
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < data.length; j++) {
                console.log(data[j]);
                const element = data[j];
                if (element.city_name.toUpperCase() == array[i]) {
                    await array[i].update({
                        id_flightapi: element.id,
                    });
                    console.log("succeed");
                    break;
                }
            }
        }
        return res.status(201).json({
            msg: array,
        });
    } catch (error) {
        return res.status(201).json({
            msg: error.toString(),
        });
    }
};

module.exports = {
    tempQuery,
};
