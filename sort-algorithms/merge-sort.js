let numbers = [5, 1, 4, 2, 8];

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
mergeSort(numbers);

function merge(left, right) {
  let temp = [];
 
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  } 
  return temp.concat(left.slice()).concat(right.slice());
}

module.exports = mergeSort;