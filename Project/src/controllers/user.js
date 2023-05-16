const User = require("../models/User");

const registerSender = async (req, res) => {
    try {
        const { error, value } = registerSchema.validate(req.body);

        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }

        const { username, password, email, nomor_hp } = value;

        // Generate the API key
        const api_key = generateApiKey(10);

        const api_hit = 0;

        // Create a new user in the database
        const newUser = await User.create({
            username,
            password,
            email,
            no_hp: nomor_hp,
            api_key,
            api_hit,
        });

        res.status(201).json({ api_key });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the user." });
    }
};
const loginSender = (req, res) => {};
const registerTraveller = (req, res) => {};
const loginTraveller = (req, res) => {};

module.exports = {
    registerSender,
    registerTraveller,
    loginSender,
    loginTraveller,
};

// Functions
function generateApiKey(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let apiKey = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        apiKey += characters.charAt(randomIndex);
    }

    return apiKey;
}
