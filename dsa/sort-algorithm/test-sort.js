// test
function getRandomArray(len) {
    var arr = [];
    while (len > 0) {
        arr.push(Math.floor(Math.random() * 100));
        len--;
    }
    //     console.log(arr.toString());
    return arr;
}


(function(sortFunc) {
    var arr, arr1, arr2, count, success = 0,
        failure = 0;
    for (count = 0; count < 10; count++) {
        arr = getRandomArray(20);
        arr1 = arr.slice();
        //         console.log('arr: ', arr.toString());
        //         console.log('arr1: ', arr.toString());
        arr.sort(function(a, b) {
            return a - b;
        });
        arr2 = sortFunc(arr1);
        //         console.log('arr after sort: ', arr.toString());
        //         console.log('arr2: ', arr.toString());
        if (arr.toString() === arr2.toString()) {
            console.log('测似通过: ', count + 1);
            success++;
        } else {
            console.warn('失败: ', count + 1);
            failure++;
        }
    }
    console.log('success:', success, '& failure:', failure);
})();
