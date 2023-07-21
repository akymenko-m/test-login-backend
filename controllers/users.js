const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const HttpError = require("../helpers/HttpError");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ name });

        if (user) {
            throw HttpError(409, "Name in use");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            ...req.body,
            password: hashPassword,
        });

        const payload = {
            id: newUser._id,
        };

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
        await User.findByIdAndUpdate(newUser._id, { token });

        res.status(201).json({ token: token });
    } catch (error) {
        res.status(error.status).json(error.message);
    }
};

const protected = async (req, res) => {
    try {
        res.status(200).json({ message: "Hello" });
    } catch (error) {
        res.status(error.status).json(error.message);
    }
};

module.exports = { login, protected };
