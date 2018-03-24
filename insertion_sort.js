/**
 * Insertion sorts works as the following. It will maintain an order of sorted and unsorted.
 * On each iteration, it will add the next element and resort the sorted subarray.
 */

function insertionSort(list, size){

  var i,j;

  for(i = 0; i < size; i++) {
    j = i;
    while( j > 0 && list[j] < list[j-1]) {
      list = swap(list, j, j-1);
      j--;
    }

  }

  return list;
}

function swap(array, indexA, indexB) {
  var tmp = array[indexB];
  array[indexB] = array[indexA];
  array[indexA] = tmp;
  return array;
}

var list = [10,9,8,7,6,5,4,3,2,1]
var size = list.length;

var result = insertionSort(list, size);
console.log(result);
