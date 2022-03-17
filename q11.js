//The value of result will be 3 because
// the varaible num1,num2,num3; is returning
//num1 + num2 + num3 in the function scope.
//Which will sum up all the values in the function call.

function myFunction(num1, num2, num3) {
  return num1 + num2 + num3;
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

const result = myFunction(1, 1, 1);
console.log(result);
