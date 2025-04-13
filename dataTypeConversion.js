let num = "24";
let number = Number(num);
console.log(number);
console.log(typeof number);

let isStudent = 1;
let boolIsStudent = Boolean(isStudent);
console.log(boolIsStudent);
console.log(typeof boolIsStudent);

let isChild = "S";
let boolIsChild = Boolean(isChild);
console.log(boolIsChild);
console.log(typeof boolIsChild);

let strNum = 24273;
let strNumber = String(strNum);
console.log(strNumber);
console.log(typeof strNumber);

// Original
console.table([typeof num, typeof isStudent, typeof isChild, typeof strNum]);
//converted
console.table([
  typeof number,
  typeof boolIsStudent,
  typeof boolIsChild,
  typeof strNumber,
]);
