const express = require('express');

const PORT = 1000;
const app = express();

app.get('/', (req, res) => {
    res.end("Hello!");
});

app.listen(PORT, () => {
    console.log("SERVER STARTED ON PORT " + PORT);
});