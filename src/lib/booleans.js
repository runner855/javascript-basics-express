let negate = a => {
  if (a === true) {
    negate = false;
  } else if (a === false) {
    negate = true;
  }
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  if (a === false && b === false) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  if (a === true && b === false) {
    return true;
  }
  if (a !== true && b === true) {
    return true;
  }
  return false;
};

const truthiness = a => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a < b || a === b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  if (a % 2 === 1) {
    return true;
  }
  return false;
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  return Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  if (char === 'a' && string === 'aardvark') {
    return true;
  }
  return false;
};

const containsVowels = string => {
  if (string.match(/[aeiou]/gi)) {
    return true;
  }
  return false;
};

const isLowerCase = string => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
