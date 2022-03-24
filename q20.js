//The value of result will be 1005.
//myFunction is has num1, num2, num3 as parameters,
//and it's returning num1 + num3.
//In the function call all the parameters are given a value except num3.
//num1 has a value of  5, num3 is just mentioned a parameter,but there is varaible with the name num3.
//and a value of 1000, That will reprensent num3.
//In the function scope it will be 5 + 100.
//Which will give us 1005.

function myFunction(num1, num2, num3) {
  return num1 + num3;
}

const num1 = 20;
const num2 = 200;
const num3 = 100;

const result = myFunction(5, 10, num3, 15);
