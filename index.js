const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

console.log(process.env)

mongoose.connect('mongodb://127.0.0.1:27017/PPIII').then(
    () => {console.log("it works :)))")},
    err => {console.log(err.message)}
);

app.listen(3001);