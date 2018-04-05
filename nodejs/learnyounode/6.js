var fileFilter = require('./6-file-fliter.js');

fileFilter(process.argv[2], process.argv[3], handlerErr);

function handlerErr(err, files) {
    if (err) {
        console.error(err);
    } else {
        files.forEach(element => {
            console.log(element);
        });
    }
}

// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//     if (err) {
//         return console.error('There was an error:', err)
//     }

//     list.forEach(function (file) {
//         console.log(file)
//     })
// })