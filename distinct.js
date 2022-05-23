// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give two Solutions to this problem, using different types of data structures each time.
// Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.

function sumDistElem(arr1, arr2){
  const distElem = [];
  let sum = 0;
  
  for (let i = 0; i<arr1.length; i++){
        if (arr2.includes(arr1[i])){
       }else {distElem.push(arr1[i])}
  }
  
  for (let j = 0; j<arr2.length; j++){
        if (arr1.includes(arr2[j])){
       }else {distElem.push(arr2[j])}
  }

  for (let i = 0; i < distElem.length; i++){
    sum += distElem[i];
  }
  
  return sum;
}
console.log(sumDistElem([12, 13, 6, 10],  [13, 10, 16, 15]))