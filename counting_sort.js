/**
 * Counting sort assumes that each of the n input elements is an integer in the range 
 * 0 to k, for some integer k.
 * 
 * When k = O(n), the sort runs in omega(n)
 * 
 * Description:
 * 
 * Counting sort determines, for each input element x, the number of elements less than x.
 * It uses this information to place element x directly into its position in the output array.
 * 
 * For example, if 17 elements are less than x, then x belongs into position 18. We must modify
 * this scheme slightly to handle the situation in which several elements have the same value,
 * since we do not want to put them in the same position.
 * 
 * Code:
 * 
 * In the code for counting sort, we assume that the input array is an array A[1..n]
 * and A.length = n.
 * 
 * We require two other arrays B[1..n] holds the sorted output, and the array C[0..k]
 * provides the temporary working storage.
 * 
*/
function countingSort(unsorted, sorted, maxInt){

    let tmp = [];

    for(let i = 0; i < maxInt; i++){

    }

    for(let i = 0; i < unsorted.length; i++){

    }

    for(let i = 0; i < maxInt; i++) {

    }

    for(let j = unsorted.length; j < 0; j--) {

    }

}

let list = [10,9,8,7,6,5,4,3,2,1];
let size = list.length;

let result = countingSort(list,0,size-1);
console.log(result);