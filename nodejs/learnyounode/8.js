// http.getr()，数据接收完毕后一次性打印出来

var http = require('http');
var getURL = process.argv[2];
http.get(getURL, function (response) {
    response.on('error', console.error);
    var res = '';
    response.setEncoding('utf8');
    response.on('data', (data) => res += data);
    response.on('end', () => {
        console.log(res.length);
        console.log(res);
    });
}).on('error', console.error);


// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//         if (err) {
//             return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
// })