/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const { query } = require('express');
const express = require('express');
const strings = require('./lib/strings');
const {sayHello} = require('./lib/strings');

const app = express();


    app.get('/strings/hello/:turtle', (req, res) => {
    res.json({result: `Hello, ${ req.params.turtle }!`})

    });

    app.get('/strings/upper/:string', (req, res) => {
        res.json({result: `${req.params.string.toUpperCase()}`})
    });

    app.get('/strings/lower/:string', (req, res) => {
        res.json({result: `${req.params.string.toLowerCase()}`})
    });

    app.get('/strings/first-characters/:string', (req, res) => {
        if(!req.query.length) {
            res.json({result: `${req.params.string.charAt(0)}`});
        } 
        res.json({result: `${ req.params.string.substring(0, req.query.length)}`});
        
        
    });

    
    








module.exports = app;
