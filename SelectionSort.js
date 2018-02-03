function selectionSort(arr) {

    var length = arr.length;

    for (var i = 0; i < length; i++) {

        var minIndex = i;
        for (j = i + 1; j < length; j++) {

            if (arr[minIndex] > arr[j]) {

                minIndex = j;
            }
        }

        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }


    }
    return arr;

}

var swap = function (array, index1, index2) {

    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
};

console.log(selectionSort([3, 4, 1, 7, 9, 10, 2, 3, 5, 6, 8]));