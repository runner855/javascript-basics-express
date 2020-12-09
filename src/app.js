/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const express = require('express');
const {sayHello} = require('./lib/strings');

const app = express();


app.get('/strings/hello/:turtle', (req, res) => {
    

    res.json({result: `Hello, ${ req.params.turtle }!`})


    });




module.exports = app;
