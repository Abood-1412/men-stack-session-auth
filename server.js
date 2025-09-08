// Here is where we import modules
// We begin by loading Express
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const methodOverride = require("method-override");
const morgan = require('morgan');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Import the Fruit model
const Food = require("./models/food.js");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"))

app.use(express.static(path.join(__dirname, "public")));


// server.js

// GET /
app.get("/", async (req, res) => {
  res.send("hello, friend!");
});


app.listen(port, () => {
  console.log('Listening on port 3000');
});
