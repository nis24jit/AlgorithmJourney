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


// return number of distinct triples (i, j, k) such that arr[i] + arr[j] + arr[k] = 0

var threeSum = function (arr) {


    var n = arr.length;
    arr.sort();
    var count = 0;

    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {

            var k = binarySearch(arr, -(arr[i] + arr[j]));
            if (k >= 0 && k > j) {
                count++;
            }
        }
    }
    return count;
}


threeSum([30, -40, -20, -10, 40, 0, 10, 5])