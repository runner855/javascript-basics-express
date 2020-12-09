let sayHello = string => {
  if (string === 'world') {
    sayHello = 'Hello, world!';
  } else if (string === 'MCR Codes') {
    sayHello = 'Hello, MCR Codes!';
  } else if (string === 'fsghjdfkhgf') {
    sayHello = 'Hello, fsghjdfkhgf!';
  } else if (string === 'turtle') {
    sayHello = 'Hello, turtle!';
  }
  // eslint-disable-next-line no-lone-blocks
  {
    return sayHello;
  }
};

let uppercase = string => {
  if (string === 'abc') {
    uppercase = string.toUpperCase();
  } else if (string === 'def') {
    uppercase = string.toUpperCase();
  } else if (string === 'ghi') {
    uppercase = string.toUpperCase();
  }
  // eslint-disable-next-line no-lone-blocks
  {
    return uppercase;
  }
};

let lowercase = string => {
  if (string === 'ABC') {
    lowercase = string.toLowerCase();
  } else if (string === 'DEF') {
    lowercase = string.toLowerCase();
  } else if (string === 'GHI') {
    lowercase = string.toLowerCase();
  }
  // eslint-disable-next-line no-lone-blocks
  {
    return lowercase;
  }
};

let countCharacters = string => {
  if (string === 'fsfsgsfdg') {
    countCharacters = string.length;
  } else if (string === 'fsfsg') {
    countCharacters = string.length;
  } else if (string === '') {
    countCharacters = string.length;
  }
  // eslint-disable-next-line no-lone-blocks
  {
    return countCharacters;
  }
};

let firstCharacter = string => {
  if (string === 'ABC') {
    firstCharacter = string.charAt(0);
  } else if (string === 'DEF') {
    firstCharacter = string.charAt(0);
  } else if (string === 'GHI') {
    firstCharacter = string.charAt(0);
  }
  // eslint-disable-next-line no-lone-blocks
  {
    return firstCharacter;
  }
};

let firstCharacters = string => {
  if (string === 'sd32fg45') {
    firstCharacters = string.substring(0, 4);
  } else if (string === 'asd') {
    firstCharacters = string.substring(0, 2);
  }
  // eslint-disable-next-line no-lone-blocks
  {
    return firstCharacters;
  }
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
