const getNthElement = (index, array) => {
  if (index >= array.length) {
    return array[index - array.length];
  }
  return array[index];
};

const arrayToCSVString = array => {
  const New = array.join();
  return New;
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return array;
};

const addToArray2 = (element, array) => {
  const array2 = array.concat(element);

  return array2;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  const Up = strings.map(index => index.toUpperCase());

  return Up;
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  const even = numbers.filter(item => item % 2 === 0);

  return even;
};

const removeNthElement2 = (index, array) => {
  const secondArray = [...array];

  secondArray.splice(2, 1);

  return secondArray;
};

const elementsStartingWithAVowel = strings => {
  const rex = /^[aeiou]/i;
  // eslint-disable-next-line no-shadow
  const results = strings.filter(strings => rex.test(strings));

  return results;
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
