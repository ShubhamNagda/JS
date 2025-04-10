// 1. Dynamic Typing
let x = 42;
x = "Hello"; // now a string

// 2. typeof Operator
typeof 123; // "number"
typeof "JS"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" ❗ (bug)
typeof {}; // "object"
typeof []; // "object"
typeof Symbol(); // "symbol"

// 3. Checking Arrays and Objects
Array.isArray([]); // true
typeof [] === "object"; // true

// 4. Type Conversion
// Implicit
"5" + 1; // "51"
"5" - 1; // 4

// Explicit
Number("5"); // 5
String(123); // "123"
Boolean(0); // false

// 5. Truthy/Falsy Check
if ("hello") {
  console.log("Truthy");
}
if (0) {
  console.log("Falsy"); // won't run
}
