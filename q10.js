//The console will log out 20 because that is the value of num3.
//And that is what was looged out.
//And also it is one of the parameters that is passed in invoking the function.
//CORRECTION:I just realized that all that metters here is which parameter
// Is console logged and looking at the parameters here you can tell they all
//writen in a particular order.In the code below num3 is the last on the list here.
//and it is the parameter that was console logged.
//But when you go to  the function call last on the list is a value 100,
//It represent the of the parameters list.

function myFunction(num1, num2, num3) {
  console.log(num2);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;
myFunction(num3, num1, 100);
