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
    const params = {
        access_key: "2b6d91693bddf6340629b8ba008124a1   ",
        offset: 0,
    };
    cek = false;
    const result = await axios.get("http://api.aviationstack.com/v1/cities", {
        params,
    });
    let data;
    result.data.data.forEach((item) => {
        console.log(item.city_name);
        if (item.city_name.toUpperCase() == req.body.city.toUpperCase()) {
            data = item;
            cek = true;
        }
    });
    params.offset += 10;
    // do {
    // } while (!cek);
    console.log(data);
    return res.status(201).json({
        status: 201,
        result: result.data,
    });
};

const country = async (req, res) => {
    let params = req.body;
    params.access_key = "f078f1a3e7b655b235383bee99b191a0";

    const result = await axios.get(
        "http://api.aviationstack.com/v1/countries",
        {
            params,
        }
    );
    console.log(result);
    return res.status(201).json({
        status: 201,
        result: result.data,
    });
};

module.exports = {
    testing,
    city,
    country,
};
