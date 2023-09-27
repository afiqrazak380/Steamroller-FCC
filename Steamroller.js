// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  
  // initailize an empty array to store flattened elements
  let flattenedArr = [];
  

  // Define recursive function 'flatten'
  function flatten(elem){
    
    if (Array.isArray(elem)){

      // If element is an array, loops through its element 
      for (let i = 0; i < elem.length; i++){

        flatten(elem[i]);

      }

    } else{

      // If elements is not array push it into flattenedArr
      flattenedArr.push(elem)

    }
  }

  // Loop through input array and apply flatten function
  arr.forEach(flatten);

  // Retrun flattenedArr as a result
  return flattenedArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));