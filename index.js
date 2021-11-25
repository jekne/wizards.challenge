const characters = require("./characters (4).json");

// console.log(characters);

const id = 2;

const findById = characters.find(function (x) {
  //   console.log("what it is x", x);
  if (id === x.id) {
    return true;
  } else {
    return false;
  }
});

console.log("this is th righgt one", findById);

const patronus = "None";

const findByPatronus = characters.filter(function (x) {
  if (x.patronus !== patronus) {
    return true;
  } else {
    return false;
  }
});

console.log("this is the caracters with patronus", findByPatronus);

const showQuotes = characters.map(function (x) {
  const { name, quote } = x;
  return ` ${name}  :  ${quote}`;
  console.log("what it is x", x);
});

console.log("this is the caracters with the quotes", showQuotes);
