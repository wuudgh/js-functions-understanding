//myFunction here has num1 as the parameter,
//And it also has has two returns within the function scope,
//First one is returning - 100 and the second num1 * 10.
//A function only knows one return unless there is an if statement,
//So it will only deal with one which is the first one returning -100.
// The value of result will be - 100.

function myFunction(num1) {
  return -100;

  return num1 * 10;
}

const result = myFunction(5);
