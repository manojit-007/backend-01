require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;

// Import JSON data
const Data = require('./data.json');

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * Data.length);
    const quote = Data[randomIndex];
    res.send(quote);
});
app.get('/all', (req, res) => {
    const quote = Data;
    res.send(quote);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
