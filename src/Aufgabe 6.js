const someVariableType = 42; // Alternativen: "einString", true, null

switch (typeof someVariableType) {
  case "number":
    console.log("number detected!");
    break;
  case "string":
    console.log("string detected!");
    break;
  case "boolean":
    console.log("boolean detected!");
    break;
  case "null":
    console.log("null detected!");
    break;
  default:
    console.log("unknown type detected!");
}
