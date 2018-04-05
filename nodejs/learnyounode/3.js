// 同步 I/O ，fs.readFileSync()

var fs = require('fs');

var buf, str, arr;
buf = fs.readFileSync(process.argv[2]);
str = buf.toString();
arr = str.split('\n');

console.log(arr.length - 1);

// 只要把 'utf8' 作为 readFileSync 的第二个参数传入
// 就可以不用 .toString() 来得到一个字符串
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1