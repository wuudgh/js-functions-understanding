//What myFunction below is doing is.
//* it has parameter of num1.
//* it has an if satement which saying if true return -10.
//* the if statement is a boolean which is true or false.
//in the code below it is sayin if true return -10.
//if we change that to false it will  exicute the next block of code.
//but in this case it is true so it exicute the first block of code.
//ignoring the next bit.
//based on the the if statement the value -10.

function myFunction(num1) {
  if (true) {
    return -10;
  }

  return num1 * 10;
}

const result = myFunction(5);
