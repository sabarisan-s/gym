const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema(
    {
        package: {
            required: true,
            type: String,
        },
        duration: {
            required: true,
            type: Number,
        },
        stage: {
            required: true,
            type: String,
        },
        price: {
            required: true,
            type: Number,
        },
        userId: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
const bookingModel = mongoose.model("Booking", bookingSchema);
module.exports = bookingModel;
