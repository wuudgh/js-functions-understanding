//The value of result will be 30.
//Because myFunction has num1 and num2 as parameters.
//Within the function scope there is varaible call result which is adding num1 to num2.
//the function is returning result which is what ever is happining within the function scope.
//Outside the function scope there is variable call result where myFunction is called and given values 10 and 20.
// 10 and 20 are representing num1 + num2. (10 + 20).

function myFunction(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = myFunction(10, 20);
myFunction(100, 2);
