Create a README.md file and for each algorithm include the following:

*Explain to a five year old how the algorithm works (3-4 sentences max)
*Psuedo code for each sorting implementation
*In your own words, describe the performance of the alogirthm for the following cases:
  *Best case scenario
  *Worst case scenario


Bubble Sort:
  Take the first number in the array and compare it to the next number in the array. If the first number is smaller than the second number, it can stay in the same place; otherwise, if the first number is larger than the second number, it should switch places with the smaller number. Continue to compare the numbers in pairs until they are in order from least to greatest. The best case scenario is that it's linear; the worst case scenario is that it's quadratic.

Quick Sort:
  Take the first number in the array, which becomes the pivot, and compare it to the remaining numbers in the array. If the number is less than the pivot, add it to the left array; if the number is greater than the pivot, add it to the right array. Continue doing this until there are no numbers remaining and combine the results, which should be in order from least to greatest. The best case scenario is that it's logarithmic; the worst case scenario is that it's quadratic.

Insertion Sort:
  Take the first number in the array and compare it to the numbers ahead of it in the array. Move that number to its correct place in numerical order. Continue doing this with each number in the array until they are in order from least to greatest. The best case scenario is that it's linear; the worst case scenario is that it's quadratic.

Selection Sort:
  Take the first number in the array, which becomes the minimum, and compare it to the next number in the array. If the minimum is smaller than the next number, it can stay in the same place; otherwise, if the minimum is larger than the next number, that next number becomes the new minimum. The numbers switch places based on the minimum. The best case scenario is that it's quadratic; the worst case scenario is that it's quadratic.

Merge Sort:
  Take the array and split it in half. If the first number is smaller than the second number, it can stay in the same place; otherwise, if the first number is larger than the second number, it should switch places with the smaller number. Combine the split arrays. The best case scenario is that it's logarithmic; the worst case scenario is that it's logarithmic.