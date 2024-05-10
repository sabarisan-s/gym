const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
        },
        phone: {
            required: true,
            type: Number,
        },
        email: {
            required: true,
            type: String,
        },
        password: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
