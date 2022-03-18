//The value of result will still be 10.
//Because the function getSomeValue is returning a value of 2.
// myFunction has num1 as a parameter, and the function getSomeValue is invoked with myFunction scope,
//set to a variable num2.
//The function myFunction is returning num1 * getSomeValue.
//myFunction is invoked with a value of 5 and stored in a varaible call result.
//The is just basically multiplying the value of num1 to the the value of getSomeValue.
//even though getSomeValue is set to a varaible num2, you could do num1 * num2 or num1 * getSomeVlue.
// Any of the two will give you the same result.

function getSomeValue() {
  return 2;
}

function myFubction(num1) {
  const num2 = getSomeValue();
  return num1 * getSomeValue();
}
const resukt = myFubction(5);
