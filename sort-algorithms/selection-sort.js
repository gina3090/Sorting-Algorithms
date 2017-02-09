let numbers = [5, 1, 4, 2, 8];

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
selectionSort(numbers);

module.exports = selectionSort;