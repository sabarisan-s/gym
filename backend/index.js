const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const auth = require("./auth");
const userModel = require("./models/userModel");
const jwt = require("jsonwebtoken");
const bookingModel = require("./models/bookingModel");

app.use(cors());
app.use(express.json());
app.use("/", require("./routers/userRoute"));

app.post("/booking", auth, async (req, res) => {
    const { user } = req.user;

    const { package, duration, stage, price } = req.body;
    if (!package || !duration || !stage || !price) {
        return res
            .status(400)
            .json({ error: true, message: "Fill * required" });
    }

    const userCheck = await userModel.findOne({ _id: user._id });
    if (!userCheck) {
        return res.status(400).json({ error: true, message: "Not a User" });
    }

    const userBooking = await bookingModel.create({
        package,
        duration,
        stage,
        price,
        userId: user._id,
    });

    res.status(201).json({
        userBooking,
        error: false,
        message: "Booking successful!",
    });
});


app.get("/getuserbooking", auth, async (req, res, next) => {
    const { user } = req.user;
    console.log(user);
    const userBooking = await bookingModel.findOne({ userId: user._id, });
    if (!userBooking) {
        return res
            .status(401)
            .json({ error: true, message: " User not found " });
    }
    res.json({ userBooking, error: false, message: "" });
});

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("connected database"))
    .catch((e) => console.log(e, "not connected database"));

const port = 8000 || process.env.PORT;
app.listen(port, (e) => {
    if (e) throw e.message;
    console.log("running server");
});
