// 异步 I/O ， fs.readFile()

var fs = require('fs');

var str, num;

function foo() {
    fs.readFile(process.argv[2], function callback(error, data) {
        // console.log(error);
        // console.log(new Boolean(!error));
        if (!error) {
            str = data.toString();
            num = str.split('\n').length - 1;
            console.log(num);
        } else {
            console.error('error');
        }
    });

    // 读文件是异步操作，异步未执行完所以 str 为 undefined
    // num = str.split('\n').length - 1;
    // console.log(num);
}
foo();


// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//     if (err) {
//         return console.log(err)
//     }
//     // 你也可以使用 fs.readFile(file, 'utf8', callback)
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
// })