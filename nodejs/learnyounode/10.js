// net.createServer()

var net = require('net');

var server = net.createServer(function (socket) {
    socket.write(getFormatTime() + '\n');
    socket.end();
});

server.listen(process.argv[2]);

function getFormatTime() {
    var date = new Date();
    var y, m, d, h, min;
    y = date.getFullYear();
    m = date.getMonth() + 1;
    d = date.getDate();
    h = date.getHours();
    min = date.getMinutes();
    y = '' + y;
    m = m > 9 ? '' + m : '0' + m;
    d = d > 9 ? '' + d : '0' + d;
    h = h > 9 ? '' + h : '0' + h;
    min = min > 9 ? '' + min : '0' + min;
    return `${y}-${m}-${d} ${h}:${min}`;
}


// var net = require('net')

// function zeroFill(i) {
//     return (i < 10 ? '0' : '') + i
// }

// function now() {
//     var d = new Date()
//     return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//     socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))