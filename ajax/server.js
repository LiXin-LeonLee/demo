const http = require('http');
const url = require('url');
const fs = require('fs');

const data = {
    ajax: 'Hello AJAX!'
}

let server = http.createServer((req, res) => {
    handleServer(req, res);
});


let server1 = http.createServer((req, res) => {
    handleServer(req, res);
});

let server2 = http.createServer((req, res) => {
    handleServer(req, res);
});

const URL_FILE = {
    '/': './index.html',
    '/ajax': 'ajax',
    '/common.js': './common.js',
    '/ajaxcors': 'cors'
}

function handleFilePath(requrl) {
    console.log(requrl);
    let pathname = url.parse(requrl).pathname;
    return URL_FILE[pathname] || 'Not Found File Path';
}

function handleServer(req, res) {
    let filePath = handleFilePath(req.url);
    console.log(filePath);
    if (filePath === 'ajax') {
        console.log('ajax');
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(data), 'utf8');
    } else if (filePath === 'cors') {
        console.log('CORS 跨域资源共享');
        res.writeHead(200, {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'
        });
        res.end(JSON.stringify(data), 'utf8');
    } else if (filePath === './index.html') {
        console.log('index.html');
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(filePath).pipe(res);
    } else if (filePath === './common.js') {
        console.log('common.js');
        res.writeHead(200, { 'content-type': 'application/javascript' });
        fs.createReadStream(filePath).pipe(res);
    } else {
        console.log('not found');
        res.writeHead(404);
        res.end('404');
    }
}

server.listen(3000, '127.0.0.1');
server1.listen(3001, '127.0.0.1');
server2.listen(3000, '127.0.0.2');