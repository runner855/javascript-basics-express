/* eslint-disable prettier/prettier */
const express = require('express');

const app = express();


app.get('/strings/hello/world', (req, res) => {
  // eslint-disable-next-line prefer-template
    res.json({ result: 'Hello, world!'});

});




module.exports = app;
