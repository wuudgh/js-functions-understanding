//  The value of result is 10.
//Because myFunction has three parameters, num1,num2, num3.
//The function is returning num2, lookig at the function input num2 is the second inline.
//And in the function call there are three values, 5,10,15. 10 is the second in line.
//So in the code below num2 will have a value of 10.

function myFunction(num1, num2, num3) {
  return num2;
}

const result = myFunction(5, 10, 15);
