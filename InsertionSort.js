function InsertionSort(arr) {
    var length = arr.length;
    var j;
    for (var i = 0; i < length; i++) {
        for (var j = i; j > 0; j--)

        {
            if (arr[j] < arr[j - 1]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }

    }
    console.log(arr);
}

InsertionSort([2,1,4,3])