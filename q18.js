//The value of result is 50.
//Becuase the function below has num1 as a parameter,
//It's also returning two things, first num1 * 10, second - 100.
//A function has only one return. so in the code below the function
///will  only return the first one which is num1 * 10,
//which is  basically  5 * 10 looking at the value myFunction was given in the fuction call.

function myFunction(num1) {
  return num1 * 10;

  return -100;
}

const result = myFunction(5);
