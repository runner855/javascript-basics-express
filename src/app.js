const express = require('express');
const { add, subtract } = require('./lib/numbers');

const app = express();

app.get('/strings/hello/:turtle', (req, res) => {
  res.json({ result: `Hello, ${req.params.turtle}!` });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: `${req.params.string.toUpperCase()}` });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: `${req.params.string.toLowerCase()}` });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (!req.query.length) {
    res.json({ result: `${req.params.string.charAt(0)}` });
  }
  res.json({ result: `${req.params.string.substring(0, req.query.length)}` });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const fish = Number(req.params.b);
  const chips = Number(req.params.a);

  if (Number.isNaN(fish, chips)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200).json({ result: add(fish, chips) });
});

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = Number(req.params.b);
  const b = Number(req.params.a);

  if (Number.isNaN(a, b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200).json({ result: subtract(b, a) });
});

module.exports = app;
