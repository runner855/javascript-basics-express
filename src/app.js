const express = require('express');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());

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

app.post('/numbers/multiply', (req, res) => {
  const a = Number(req.body.b);
  const b = Number(req.body.a);

  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a, b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.json({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a, b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a, b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(a, b) });
});

module.exports = app;
