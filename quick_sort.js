/**
 * Quicksort
 * 
 * Quicksort, like merge sort, applies the divide-and-conquer paradigm. 
 * 
 * Divide: Partition (rearrange) the array A[p..r] two (possibly empty) subarrays.
 * A[p..q-1] and A[q+1..r] such that each element of A[p..q-1] is less than or equal to A[q]
 * which is, in turn, less than or equal to each element of  A[q+1..r]. 
 * Compute the index q as part of this partitioning procedure.
 *
 * Conquer: Sort the two subarrays A[p..q-1] and A[q+1..r] by recursive calls to quicksort. 
 * 
 * Combine: Because the subarrays are already sorted, no work is needed to combine them: the
 * entire array A[p..r] is now sorted.
 * 
 * Runtime: The running time of quicksort depends on whether the partitioning is balanced or unbalanced,
 * which in turn depends on which elements are used for partitioning is balanced, the algorithm runs 
 * asymptotically as fast as mergesort. If the partitioning is unbalanced, however, it can run asympotically
 * as slowly as insertion sort. In this section, we shall informlly investigate how quicksort performs under
 * the assumptions of balanced vs unbalancing partitioning.
 * 
*/

function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   let pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, pivot, partitionIndex);
  return partitionIndex;
}

function swap(list, indexA, indexB){
  var tmp = list[indexA];
  list[indexA] = list[indexB];
  list[indexB] = tmp;
  return list;
}

let list = [10,9,8,7,6,5,4,3,2,1];
let size = list.length;

let result = quickSort(list,0,size-1);
console.log(result);