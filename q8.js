//The value of result at the end will be 5.
//Because myFunction has a two arguments num1 and num2,
//And are sum together with the plus sign which means what ever value num1 has will be plus the value of num2.
// And here out side the fuction block they all given a value.
///That you can see in the code below and num1 = 10, num2 = 1 and num3 = 4.

//Correction: The result is 14 because the function is called with.
// New set of arguments. num3 which value is 4 and num1 whic value is 10. Which is 4 + 10 = 14.
///And stored in a variable call result.

function myFunction(num1, num2) {
  return num1 + num2;
}
const num1 = 10;
const num2 = 1;
const num3 = 4;

const result = myFunction(num3, num1);
console.log(result);
