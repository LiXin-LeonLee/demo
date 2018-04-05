// fs.readdir，异步读取文件列表

var fs = require('fs');

var path = process.argv[2],
    type = '.' + process.argv[3] + '$';

var re = new RegExp(type);
// console.log(re);

function foo() {
    fs.readdir(path, function(err, fileList) {
        if(err) { console.error(err); }
        // console.log(fileList);
        var list = fileList.filter(function(e) {
            return re.test(e);
        });
        // console.log(list);
        // list.forEach(console.log);
        for(let i=0; i<list.length; i++) {
            console.log(list[i]);
        }
    })
}

foo();


// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })