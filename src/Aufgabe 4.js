// Pfeil-Funktionen

// Teil 1
const addEmptySpace = (string1, string2) => `${string1} ${string2}`;
console.log(addEmptySpace("Hallo", "Welt"));

// --------------

const numberTest = (number) => {
  if (number > 0) {
    return "Die Zahl ist grösser 0";
  } else if (number < 0) {
    return "Die Zahl ist kleiner 0";
  } else {
    return "Die Zahl ist 0";
  }
};

console.log(numberTest(-1));

// --------------

// Teil 3
const max = (number1, number2) => (number1 > number2 ? number1 : number2);
console.log(max(1, 2));
// auch: const max = (number1, number2) => {return (number1 > number2 ? number1 : number2};

// --------------
