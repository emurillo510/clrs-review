public class Insertionsort {

  public static void main(String[]args) {

    int[] unsorted = { 10,9,8,7,6,5,4,3,2,1 };
    int size = unsorted.length-1;

    int[] sorted = insertionSort(unsorted,size);

    for(int i=0; i < sorted.length; i++) {
      System.out.print(sorted[i]);
    }

  }

  // 10,9,8,7,6,5,4,3,2,1
  public static int[] insertionSort(int[] list, int n) {

    // given a list
    // maintain a list of sorted array
    // grab and add the next element into the array
    // re-sort the array
    int j;

    for(int i=1; i < list.length; i++) {

      j=i;
      while( (j > 0) && (list[j] < list[j-1]) ) {

        list = swap(list,j,j-1);
        j--;
      }
    }

    return list;

  }

  public static int[] swap(int[] list, int indexA, int indexB) {

    int temp = list[indexB];
    list[indexB] = list[indexA];
    list[indexA] = temp;

    return list;

  }

}
