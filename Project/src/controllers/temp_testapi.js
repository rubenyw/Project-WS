const axios = require("axios");

const testing = async (req, res) => {
    const params = {
        access_key: "f078f1a3e7b655b235383bee99b191a0",
        flight_iata: req.body.flight_code,
    };

    const flightsInAir = []; // Array to store flights in the air

    const result = await axios
        .get("http://api.aviationstack.com/v1/flights", { params })
        .then((response) => {
            const apiResponse = response.data;
            console.log(apiResponse);
            for (const x of apiResponse.data) {
                if (x["flight_status"]) {
                    const flightInfo = {
                        airline: x["airline"]["name"],
                        flightCode: x["flight"]["iata"],
                        departureAirport: x["departure"]["airport"],
                        departureIATA: x["departure"]["iata"],
                        arrivalAirport: x["arrival"]["airport"],
                        arrivalIATA: x["arrival"]["iata"],
                        flightStatus: x["flight_status"],
                        estimatedArrival: x["arrival"]["estimated"],
                        actualDeparture: x["departure"]["actual"],
                    };
                    flightsInAir.push(flightInfo); // Add flight information to the array
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });

    return res.status(201).json({
        msg: flightsInAir,
    });
};

const city = async (req, res) => {
    console.log("success");
    const params = {
        access_key: "7639c0479301fe4cb3fff6fc87308683",
        limit: 10000,
        city_id: 1,
    };
    cek = false;
    const result = await axios.get("http://api.aviationstack.com/v1/cities", {
        params,
    });
    let data = [];
    result.data.data.forEach((item) => {
        if (item.country_iso2 == "ID") data.push(item);
    });
    console.log(data);
    return res.status(201).json({
        status: 201,
        data,
    });
};

const country = async (req, res) => {
    let params = {
        access_key: "7639c0479301fe4cb3fff6fc87308683",
        limit: 300,
    };
    const result = await axios.get(
        "http://api.aviationstack.com/v1/countries",
        {
            params,
        }
    );
    let hasil = [];
    result.data.data.forEach((element) => {
        if (element.country_name == "Indonesia") hasil = element;
    });
    return res.status(201).json({
        status: 201,
        hasil,
    });
};

module.exports = {
    testing,
    city,
    country,
};
