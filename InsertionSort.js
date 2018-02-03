function InsertionSort(arr) {

    var length = arr.length;
    var j;
    for (var i = 1; i < length; i++) {
        var temp = arr[i];
        j = i;
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }


    console.log(arr);
}

InsertionSort([8, 5, 1, 4]);

