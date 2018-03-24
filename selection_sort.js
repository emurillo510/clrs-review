/**
 * Selection sort does the following: Given an array. Similar to insertion_sort you have a subarray of sorted elements.
 * Also, you have an array of non-sorted elements. But the difference is that with selection sort, you search for the min or max
 * Inside the entire array. Instead of inserting one element at a time and maintaining the sorted property.
 * Once you find the mix or max you swap it with the last element of the array.
 */

function selectionSort(list, size) {

  var min,i,j;

  for(i = 0; i < size - 1; i++) {
    min = i;
    for(j = i+1; j < size; j++){
      console.log('list', list);
      if(list[j] < list[min]){
        list = swap(list, min, j);
      }
    }
  }
  
  return list;
}

function swap(list, indexA, indexB){
  var tmp = list[indexA];
  list[indexA] = list[indexB];
  list[indexB] = tmp;

  return list;
}

var list = [10,9,8,7,6,5,4,3,2,1];
var size = list.length;

var result = selectionSort(list, size);
console.log(result);