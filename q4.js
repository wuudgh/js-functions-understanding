//add and num are the parameters of the function.
//In this function num is -1 meaning what ever value you give num will be minors 1.
//The value of num is 9 because 10 - 1 is 9.
//Correction: After checking i realized that value of add = 3 and that of num = 10.
//Meaning they both stayed the same and i don't knoww why i will need some explanation.

function myFunction(num) {
  return num - 1;
}
let num = 10;
console.log("num2", num);
let add = 3;
//console.log("add1", add);

add = myFunction(add);
console.log("add2", add);
add = myFunction(add);
console.log("add3", add);
