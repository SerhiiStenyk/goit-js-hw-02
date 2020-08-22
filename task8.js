function reduceArray(array) {
    'use strict';
    let total = 0;
    for (const item of array) {
        if (array.length > 0) {
           total += item 
        }
    }
    return total;
  };
  console.log(reduceArray([1, 2, 3]));
  console.log(reduceArray([-2, 0, 2]));
  console.log(reduceArray([1, 2, 2.5]));
  