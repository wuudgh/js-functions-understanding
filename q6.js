//The function has two parameters num and num1.
//The value that will be logged inside this function will be 2
//Because we looged num1 and num1 is given a value of 2.
//And also it is used when invoking the function.
//If we had logged both num1 and num e.g.console,log(num1,num)
//Then we will have both 2 and 10 because that are the values each is asigned to.
//And both were used when invoking the function.

function myFunction(num, num1) {
  console.log(num1, num);
}

let num = 10;
let num1 = 2;

myFunction(num1, num);
