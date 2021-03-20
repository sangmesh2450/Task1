// using ... operator

var orginalArray = [1, 2, 3, 4];
var duplicateArray = [...orginalArray];

// now even if we change values of duplicateArray
//the original array wont get effected.

// changing element at 0 index
duplicateArray[0] = 1000;
//

//printing the elements of both array
console.log(duplicateArray, orginalArray);
