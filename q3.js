//num is the parameter of the function or the input.
//Here in this function is saying num -1 meaning what ever value we  give num is -1.
//The value of num at the end of the function is 9
//Correction:At the end of the programe num = 9 and NaN
// Within the function block num = 9 and num is NaN outside the function block
//Because it is parameter passed whith the function and it is only relivant within the block.

function myFunction(num) {
  return console.log(num - 1);
}
let num = 10;
num = myFunction(num);
num = myFunction(num);
//console.log(num);
