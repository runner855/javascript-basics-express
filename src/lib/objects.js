const createPerson = (name, age) => {
  return {
    name,
    age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  // eslint-disable-next-line no-prototype-builtins
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  // eslint-disable-next-line no-shadow
  const HowOld = people.map(people => people.age);

  return HowOld;
};

const findByName = (name, people) => {
  // eslint-disable-next-line no-shadow
  const names = people.find(people => people.name === name);

  return names;
};

const findHondas = cars => {
  // eslint-disable-next-line no-shadow
  const carH = cars.filter(cars => cars.manufacturer === 'Honda');

  return carH;
};

const averageAge = people => {
  let count = 0;
  let sumAge = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in people) {
    // eslint-disable-next-line no-prototype-builtins
    if (people.hasOwnProperty(key)) {
      // eslint-disable-next-line no-prototype-builtins
      if (people[key].hasOwnProperty('age')) {
        sumAge += people[key].age;
        count += 1;
      }
    }
  }
  return sumAge / count;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,

    introduce(greeTing) {
      return `Hi ${greeTing}, my name is ${this.name} and I am ${this.age}!`;
    },
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
