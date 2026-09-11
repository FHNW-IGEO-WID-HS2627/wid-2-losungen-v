const someVariableType = 42; // Alternativen: "einString", true, null

if (typeof someVariableType === "number") {
  console.log("number detected!");
} else if (typeof someVariableType === "string") {
  console.log("string detected!");
} else if (typeof someVariableType === "boolean") {
  console.log("boolean detected!");
} else if (typeof someVariableType === "null") {
  console.log("null detected!"); // Null ist ein Object - ein Fehler aus dem Jahr 1995
} else {
  console.log("unknown type detected");
}
