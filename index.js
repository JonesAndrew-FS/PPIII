const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

console.log(process.env)

const host = process.env.DB_HOST;
const name = process.env.DB_NAME;

mongoose.connect(`mongodb://${host}/${name}`).then(
    () => {console.log("it works :)))")},
    err => {console.log(err.message)}
);

app.listen(3001);