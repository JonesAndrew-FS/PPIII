const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

console.log(process.env)

app.listen(3001);