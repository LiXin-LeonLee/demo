var fs = require('fs');
var path = require('path');

module.exports = function fileFilter(folder, ext, handler) {
    fs.readdir(folder, function (err, files) {
        if (err) {
            return handler(err);
        }
        ext = '.' + ext;
        var res = files.filter(function (file) {
            return path.extname(file) === ext;
        });
        handler(null, res);
    });
};


// 官方
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//     fs.readdir(dir, function (err, list) {
//         if (err) {
//             return callback(err)
//         }

//         list = list.filter(function (file) {
//             return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//     })
// }