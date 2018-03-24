// ES5 插入排序

// 依据算法描述的基本实现
function insertionSort(arr) {
    var i, j, key;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}


// 优化：二分查找插入排序
// 通过二分搜索算法查找插入位置
function binaryInsertionSort(arr) {
    var i, key, left, right, middle, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        left = 0;
        right = i - 1;
        while (left <= right) {
            middle = Math.floor((left + right) / 2);
            if (arr[middle] > key) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        // 小于等于key的元素都在arr[left]之前，故只需 arr[left]...arr[i-1] 都向后移一个位置
        for (j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    return arr;
}


var arr = (function(len) {
    var arr = [];
    while (len > 0) {
        arr.push(Math.floor(Math.random() * 100));
        len--;
    }
    return arr;
})(100);


console.time('insertionSort');
insertionSort(arr);
console.timeEnd('insertionSort');
console.time('binaryInsertionSort');
binaryInsertionSort(arr);
console.timeEnd('binaryInsertionSort');
