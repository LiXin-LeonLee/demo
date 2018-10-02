let sendAjax = (reqUrl) => {
    let showResDom = document.getElementById('showResponse');
    showResDom.innerHTML = 'waiting';
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = showData;
    httpRequest.open('GET', reqUrl);
    httpRequest.send();

    function showData() {
        console.log(`readyState: ${httpRequest.readyState}`);
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                data = JSON.parse(httpRequest.responseText);
                showResDom.innerHTML = data.ajax;
            }
            if (httpRequest.status === 0) {
                showResDom.innerHTML = '请求失败';
            }
        }

    }
}

document.onload = document.getElementById('currentOrigin').innerHTML = location.href;
