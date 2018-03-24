/**
 * Bubblesort swaps ajacent indexes until the array is finally sorted.
*/

function bubbleSort(list, size) {
    
    var i,j;

    for(i = 0; i < size - 1; i++) {
      for(j = 0; j < size - 1; j++) {
          if(list[j] > list[j+1]) {
            list = swap(list, j, j+1);
          }
      }
    }
    return list;
}

function swap(list, indexA, indexB) {
  var tmp = list[indexA];
  list[indexA] = list[indexB];
  list[indexB] = tmp;

  return list;
}


var list = [10,9,8,7,6,5,4,3,2,1];
var size = list.length;

var result = bubbleSort(list, size);
console.log(result);