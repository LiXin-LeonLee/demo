var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
    var reqURL = url.parse(req.url);
    var iso = querystring.parse(reqURL.query).iso;
    var data;
    switch (reqURL.pathname) {
        case '/api/parsetime':
            data = getTimeByJson(iso);
            break;
        case '/api/unixtime':
            data = getUnixTimeByJson(iso);
            break;
        default:
            break;
    }
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(data, 'utf8');
});

server.listen(Number(process.argv[2]));

function getTimeByJson(timeStr) {
    var t = new Date(timeStr);
    var timeObj = {
        'hour': t.getHours(),
        'minute': t.getMinutes(),
        'second': t.getSeconds()
    };
    return JSON.stringify(timeObj);
}

function getUnixTimeByJson(timeStr) {
    var timeObj = {
        'unixtime': new Date(timeStr).getTime()
    };
    return JSON.stringify(timeObj);
}



// var http = require('http')
// var url = require('url')

// function parsetime(time) {
//     return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//     }
// }

// function unixtime(time) {
//     return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//     parseQueryString如果为 true，则 query 属性总会通过 querystring 模块的 parse() 方法生成一个对象
//     如果为 false，则返回的 URL 对象上的 query 属性会是一个未解析、未解码的字符串。 默认为 false
//     var parsedUrl = url.parse(req.url, true)
//     var time = new Date(parsedUrl.query.iso)
//     var result

//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//     }

//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//     } else {
//         res.writeHead(404)
//         res.end()
//     }
// })
// server.listen(Number(process.argv[2]))