const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, "Please set password length min 6 symbols"],
        minlength: 6,
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
    },
    token: {
        type: String,
        default: "",
    },
});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
