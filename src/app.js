const express = require('express');
const { add } = require('./lib/numbers');

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
  // eslint-disable-next-line radix
  const fish = parseInt(req.params.b);
  // eslint-disable-next-line radix
  const chips = parseInt(req.params.a);

  // eslint-disable-next-line use-isnan
  if (Number.isNaN(fish, chips)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200).json({ result: add(fish, chips) });
});

app.get('/numbers/subtract/:a/and/:b', (req, res) => {
  // eslint-disable-next-line radix
  const a = parseInt(req.params.a);
  // eslint-disable-next-line radix
  const b = parseInt(req.params.b);

  // eslint-disable-next-line no-undef
  res.status(200).json({ result: subtract(a, b) });
});

module.exports = app;
