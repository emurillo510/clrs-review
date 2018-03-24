function quickSort(list, low, high){

  if(list.length < 2){
      return list;
  }

  if(low < high){
      let pivot = high;
      let partitionIndex;
      partitionIndex = partition(list, pivot, low, high);
      quickSort(list, low, partitionIndex - 1);
      quickSort(list, partitionIndex + 1, high);
  }

  return list;

}

function partition(list, pivot, low, high){

    let partitionIndex = low;

    for(var i = low; i < high; i++){
        if(list[i] <= list[pivot]){
          swap(list, i, partitionIndex);
          partitionIndex++;
        }
          console.log('list',list);
    }
    swap(list, pivot, partitionIndex);

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