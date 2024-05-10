const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const auth = require("./auth");
const userModel = require("./models/userModel");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
app.use("/", require("./routers/userRoute"));

// app.post("/signup", async (req, res) => {
//     const { name, phone, email, password } = req.body;
//     if (!name || !phone || !email || !password) {
//         return res
//             .status(400)
//             .json({ error: true, message: "Fill * required" });
//     }

//     const phonePattern = /^[\d]{10}$/;
//     if (!phonePattern.test(phone)) {
//         return res
//             .status(400)
//             .json({ error: true, message: "Phone not valid" });
//     }

//     const emailPattern = /^[\w]+@[\w]+.[\w]+$/;
//     if (!emailPattern.test(email)) {
//         return res
//             .status(400)
//             .json({ error: true, message: "Email wrong pattern" });
//     }

//     const checkEmail = await userModel.findOne({ email });
//     if (checkEmail) {
//         return res
//             .status(400)
//             .json({ error: true, message: "Email already taken" });
//     }

//     if (password.length < 8) {
//         return res
//             .status(400)
//             .json({ error: true, message: "password min 8 character" });
//     }

//     const genSalt = await bcryptjs.genSalt(9);
//     const hashedPassword = await bcryptjs.hash(password, genSalt);
//     const user = await userModel.create({
//         ...req.body,
//         password: hashedPassword,
//     });
//     const token = jwt.sign({ user }, process.env.SECRET_KEY);
//     res.status(201).json({
//         user,
//         token,
//         error: false,
//         message: "SignUp successful!",
//     });
// });

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res
//             .status(400)
//             .json({ error: true, message: "Fill * required" });
//     }

//     const emailPattern = /^[\w]+@[\w]+.[\w]+$/;
//     if (!emailPattern.test(email)) {
//         return res
//             .status(400)
//             .json({ error: true, message: "Email wrong pattern" });
//     }

//     const user = await userModel.findOne({ email });
//     if (!user) {
//         return res.status(400).json({ error: true, message: "User not found" });
//     }

//     const checkPassword = await bcryptjs.compare(password, user.password);
//     if (!checkPassword) {
//         return res.status(400).json({ error: true, message: "Wrong password" });
//     }
//     const token = jwt.sign({ user }, process.env.SECRET_KEY);
//     res.status(201).json({
//         user,
//         token,
//         error: false,
//         message: "Login Successful!",
//     });
// });

// app.get("/user", auth, async (req, res, next) => {
//     const { user } = req.user;
//     console.log(user);
//     const isUser = await userModel.findOne({ _id: user._id });
//     if (!isUser) {
//         return res
//             .status(401)
//             .json({ error: true, message: " User not found " });
//     }
//     res.json({ user, error: false, message: "" });
// });

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("connected database"))
    .catch((e) => console.log(e, "not connected database"));

const port = 8000 || process.env.PORT;
app.listen(port, (e) => {
    if (e) throw e.message;
    console.log("running server");
});
