const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");



mongoose.connect("mongodb+srv://assulemana003:sulemanaabu@cluster0.rjhgwuk.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connected to MongoDB")
}).catch(err=>{
    console.log("Error connecting to MongoDB", err)
})


app.listen(port, () => {
    console.log("Server started on port " + port);
})
