//The function has to parameters num and num1.
//The value loged inside the function will be undefined.
//Because num1 is given a value but not used in the function call.
//Correction: after testing the code i realized that num has its value of 10 if logged inside the function.
//But not just because its used in invoking the function also because it is the first in the function arguments.
//I interchanded the positions of the parameters in the function that is how i knew.

function myFunction(num, num1) {
  console.log(num1);
}
let num = 10;
let num1 = 2;
myFunction(num);
