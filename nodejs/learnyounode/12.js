var http = require('http');

var server = http.createServer(function (req, res) {
    var temp = '';
    if (req.method === 'POST') {
        req.setEncoding('utf8');
        req.on('data', (data) => {
            temp += data;
        }
        );
        req.on('end', () => {
            temp = temp.toUpperCase();
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(temp, 'utf8');
        });
    }
});

server.listen(Number(process.argv[2]));



// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//     if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//     }

//     req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//     })).pipe(res)
// })

// server.listen(Number(process.argv[2]))