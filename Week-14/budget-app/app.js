require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const assetRoutes = require("./routes/assets");

const app = express();
const MONGODB_URL = process.env.MONGODB_URL;
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/assets", assetRoutes);

mongoose.connect(MONGODB_URL, () => console.log("Connected to DB!"));
app.listen(3000);
