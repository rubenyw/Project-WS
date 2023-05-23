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

const test_airport = async (req, res) => {};

module.exports = {
    testing,
    test_airport,
};
