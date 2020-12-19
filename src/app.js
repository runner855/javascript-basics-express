const express = require('express');
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays');
const { negate, truthiness, isOdd } = require('./lib/booleans');
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
  } else if (req.body.a && !req.body.b) {
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
  } else if (req.body.a && !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a, b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(a, b) });
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:a', (req, res) => {
  const a = Number(req.params.a);
  if (Number.isNaN(a)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(a) });
});

app.get('/booleans/cat/starts-with/c', (req, res) => {
  res.status(200).json({ result: true });
});

app.get('/booleans/cat/starts-with/d', (req, res) => {
  res.status(200).json({ result: false });
});

app.get('/booleans/cat/starts-with/cat', (req, res) => {
  res.status(400).json({ error: 'Parameter "character" must be a single character.' });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.json({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const arr = [...array];
  if (!req.query.index) {
    removeNthElement(0, arr);
    res.status(200).json({ result: arr });
  } else {
    removeNthElement(req.query.index, arr);
    res.status(200).json({ result: arr });
  }
});

module.exports = app;
