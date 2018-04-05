var http = require('http');

var resList = [];

// let 声明 i，块作用域
for (let i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], function (response) {
        response.on('error', console.error);
        response.setEncoding('utf8');
        let temp = '';
        response.on('data', (data) => {
            temp += data;
        });
        // console.log(temp);
        response.on('end', () => {
            resList[i - 2] = temp;
            if (resList.length === 3) {
                resList.forEach((str) => console.log(str));
            }
        });
    }).on('error', console.error);
}


// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults() {
//     for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//     }
// }

// function httpGet(index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err) {
//                 return console.error(err)
//             }

//             results[index] = data.toString()
//             count++

//             if (count === 3) {
//                 printResults()
//             }
//         }))
//     })
// }

// for (var i = 0; i < 3; i++) {
//     httpGet(i)
// }