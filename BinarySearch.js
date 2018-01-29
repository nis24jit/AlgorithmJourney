var binarySearch = function (arr, key) {


    var leftPointer = 0;
    var rightPointer = arr.length - 1;


    while (leftPointer <= rightPointer) {

        var mid = (leftPointer + rightPointer) / 2 | 0;
        if (key < arr[mid]) {

            rightPointer = mid - 1;

        } else if (key > arr[mid]) {

            leftPointer = mid + 1;
        }
        else {
            return mid;
        }

    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));