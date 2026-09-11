// Funktionen

function multiply(multiplikator, multiplikant = 2) {
  if (typeof multiplikator !== "number" || typeof multiplikant !== "number") {
    console.log("Error!");
  }

  console.log(multiplikator * multiplikant);
  return;
}

multiply(2);
