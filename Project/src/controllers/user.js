const { registerSchema, loginSchema } = require("../validation/user");

const User = require("../models/User");
const Rating = require("../models/Rating");

const multer = require("multer");
const fs = require("fs");
const path = require("path");
const KTP = require("../models/KTP");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const folderName = `./src/uploads`;
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName, { recursive: true });
        }

        callback(null, folderName);
    },
    filename: (req, file, callback) => {
        callback(null, `${req.body.id}.png`);
    },
});

const upload = multer({ storage: storage });

const uploadKTP = async (req, res) => {
    const image = req.file;

    // Cek jika tidak ada gambar yang diunggah
    if (!image) {
        await KTP.destroy({ where: { id_user: req.pengguna.id } });
        return res.status(400).json({
            status: 404,
            message: "No image uploaded",
        });
    }

    return res.status(201).json({
        status: 201,
        message: "Image uploaded and text input received",
    });
};

// STEVEN PUNYA
const registerSender = async (req, res) => {
    const { error, value } = registerSchema.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        console.log(error);
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(400).json({
            status: 400,
            msg: validationErrors,
        });
    }

    const { username, password, email, nomor_hp } = value;

    // Generate the API key
    const api_key = generateApiKey(10);

    // Other Variables
    const api_hit = 0;
    const saldo = 0;
    const role = "Sender";

    // Create a new user in the database
    const newUser = await User.create({
        username,
        password,
        email,
        no_hp: nomor_hp,
        api_key,
        api_hit,
        saldo,
        role,
    });
    // return res.status(201).json({ api_key });
    return res.status(201).json({
        body: {
            username: newUser.username,
            api_key: newUser.api_key,
            role: newUser.role,
        },
    });
};

// STEVEN PUNYA
const loginSender = async (req, res) => {
    const { error, value } = loginSchema.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        console.log(error);
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    const { username, password } = value;

    // Find the user in the database
    const user = await User.findOne({
        where: {
            username: username,
        },
    });

    if (!user) {
        return res.status(404).json({ error: "User not found." });
    }

    if (password != user.password) {
        return res.status(401).json({ error: "Invalid password." });
    }

    if (user.role != "Sender") {
        return res.status(401).json({ error: "Bukan Sender." });
    }

    // return res.status(200).json({ api_key: user.api_key });
    return res.status(201).json({
        body: {
            username: user.username,
            api_key: user.api_key,
        },
    });
};

// STEVEN PUNYA
const registerTraveller = async (req, res) => {
    const { error, value } = registerSchema.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        console.log(error);
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    const { username, password, email, nomor_hp } = value;

    // Generate the API key
    const api_key = generateApiKey(10);

    // Other Variables
    const api_hit = 0;
    const saldo = 0;
    const role = "Traveller";

    // Create a new user in the database
    const newUser = await User.create({
        username,
        password,
        email,
        no_hp: nomor_hp,
        api_key,
        api_hit,
        saldo,
        role,
    });

    // res.status(201).json({ api_key });
    return res.status(201).json({
        body: {
            username: newUser.username,
            api_key: newUser.api_key,
            role: newUser.role,
        },
    });
};

// STEVEN PUNYA
const loginTraveller = async (req, res) => {
    const { error, value } = loginSchema.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        console.log(error);
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    const { username, password } = value;

    // Find the user in the database
    const user = await User.findOne({
        where: {
            username: username,
        },
    });

    if (!user) {
        return res.status(404).json({ error: "User not found." });
    }

    if (password != user.password) {
        return res.status(401).json({ error: "Invalid password." });
    }
    console.log(user);

    if (user.role !== "Traveller") {
        return res.status(401).json({ error: "Bukan Traveller." });
    }

    // Calculate the average rating for the user
    const ratings = await Rating.findAll({
        where: { id_traveller: user.id },
    });
    const ratingsSum = ratings.reduce((acc, rating) => acc + rating.rate, 0);
    const averageRating = ratings.length ? ratingsSum / ratings.length : 0;

    // return res
    //     .status(200)
    //     .json({ api_key: user.api_key, average_rating: averageRating });
    return res.status(201).json({
        body: {
            username: user.username,
            api_key: user.api_key,
            average_rating: averageRating,
        },
    });
};

module.exports = {
    registerSender,
    registerTraveller,
    loginSender,
    loginTraveller,
    uploadKTP,
    upload,
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
