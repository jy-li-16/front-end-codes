function doGET(url, 请求成功的处理函数) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                请求成功的处理函数(xhr.responseText)
            }
        }
    }
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send()
}