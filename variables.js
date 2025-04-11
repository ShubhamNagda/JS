// ✅ 1. Variable Declarations
var a = 10; // function scoped, can be re-declared
let b = 20; // block scoped, cannot be re-declared
const c = 30; // block scoped, cannot be re-declared or reassigned

// ✅ 2. Hoisting
console.log(hoistedVar); // undefined
var hoistedVar = "I was hoisted";

// console.log(hoistedLet); // ❌ Error
// let hoistedLet = "Not hoisted like var";

// ✅ 3. Scope Example
function scopeTest() {
  if (true) {
    var x = "function scoped";
    let y = "block scoped";
    const z = "also block scoped";
  }
  console.log(x); // ✅ "function scoped"
  // console.log(y); // ❌ ReferenceError
  // console.log(z); // ❌ ReferenceError
}
scopeTest();

// ✅ 4. Re-declaration and Reassignment
var v = 1;
var v = 2; // ✅ allowed

let l = 3;
// let l = 4;      // ❌ not allowed

const k = 5;
// const k = 6;    // ❌ not allowed

// ✅ 5. Global vs Local
let globalVar = "I'm global";
function showLocal() {
  let localVar = "I'm local";
  console.log(globalVar); // ✅
  console.log(localVar); // ✅
}
showLocal();
// console.log(localVar); // ❌ Error

// ✅ 6. Primitive vs Reference
let num1 = 100;
let num2 = num1;
num2 = 200;
console.log(num1); // 100 (unchanged)

let obj1 = { name: "Shubham" };
let obj2 = obj1;
obj2.name = "JavaScript";
console.log(obj1.name); // JavaScript (reference)

// ✅ 7. Variable Naming
let _underscore = true;
let $dollar = "yes";
let camelCase = "preferred";
// let 123abc = "invalid";  // ❌
// let let = "reserved";    // ❌

// ✅ 8. typeof Operator
let str = "JS";
let isReady = true;
let notAssigned;

console.log(typeof str); // string
console.log(typeof isReady); // boolean
console.log(typeof notAssigned); // undefined
console.log(typeof null); // object ❗ (known JS bug)
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function
