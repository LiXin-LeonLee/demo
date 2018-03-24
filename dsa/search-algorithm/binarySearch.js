// ES5 二分搜索
// arr 为升序数组，t 为目标值
function binarySearch(arr, t) {
    var l = 0,
        r = arr.length - 1,
        m;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (arr[m] < t) {
            l = m + 1;
        } else if (arr[m] > t) {
            r = m - 1;
        } else {
            return m;
        }
    }
    return -1;
}

binarySearch([1, 3, 4, 6, 7, 25, 44, 50], 7);
