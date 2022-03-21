//myFunction has  an input num1, which has two returns
//with an if statement. the first return has an if statement.
//which is saying if false return something, what this is doing is,
//what ever is going on here if it is false don't return it.
//return the next one, which is num1 * 10.
//num1 * 10 is 5 * 10 based on the value the function call is given,
/// and stored in a variable call result. so the value is result is 50.

function myFunction(num1) {
  if (false) {
    return -100;
  }

  return num1 * 10;
}

const result = myFunction(5);
