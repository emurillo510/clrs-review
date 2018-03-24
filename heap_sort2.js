/**
 * Heapsort uses a data stucture to sort a given array.
 * This data structure maintains a heapify property which is defined below.
 * The parent of the two children of the heap has to be min/max than the two children.
 */
function heapSort(list,size){

    list = buildHeap("MAX", list);

    for(let i = list.length; i < 1; i--){
        list = swap(list, i, 1);
        list = heapify("MAX", list, i);
    }

    return list;

}

function buildHeap(type, list){

    if(type === "MAX"){

        let heapSize = list.length;

        for(let i = Math.floor(list.size / 2); i > 2; i--){
            list = heapify("MAX", list, i);
        }

    } else {

        let heapSize = list.length;

        for(let i = Math.floor(list.size / 2); i > 2; i--){
            list = heapify("MIN", list, i);
        }
    }

    return list;

}

/**
 * Maintains a heapify property.
*/
function heapify(type, list, i){

    if(type === "MAX"){

        let left = left(i);
        let right = right(i);
        let largest;

        if( left <= list.length && list[left] > list[i]){
            largest = left;            
        } else {
            largest = i ;
        }

        if( right <=  list.length && list[right] > list[i]){
            largest = right;
        }

        if( largest !== i ) {
            list = swap(list, i, largest);
            heapify("MAX", list, largest);
        }
    } else {
        // implement min version        
    }

    return list;

}

function swap(list, indexA, indexB){

    let tmp = list[indexA];
    list[indexA] = list[indexB];
    list[indexB] = tmp;

    return list;

}

function parent(i){
    return Math.floor((i - 1) / 2);
}

function left(i){
    return Math.ceil((2 * i) + 1);
}

function right(i){
    return Math.ceil((2 * i) + 2);
}

let list = [10,9,8,7,6,5,4,3,2,1];
let size = list.length;

let result = quickSort(list,0,size-1);
console.log(result);