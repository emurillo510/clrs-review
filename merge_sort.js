/**
 * 
 * 
 * 
*/
function mergeSort(list, size){

    if(list.length < 2){
        return list;
    }

    let mid = Math.floor(list.length / 2);
    let left = list.slice(0, mid);
    let right = list.slice(mid, list.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];
    
    while (left.length && right.length) {
      let leftElm = left[0];
      let rightElm = right[0];
      if (leftElm <= rightElm) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
     }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
}

let list = [10,9,8,7,6,5,4,3,2,1];
let size = list.length;

let result = mergeSort(list,size);
console.log(result);