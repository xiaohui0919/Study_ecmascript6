'use strict';

function getMsg(url) {
    var p = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.send();
        xhr.onreadystatechange = function () {
            // 确保 数据已经处理完
            if (xhr.readyState != 4) return;
            if (xhr.status == 200) {
                alert(xhr.responseText);
                //成功
                resolve('ok');
            } else {
                reject('err');
            }
        };
    });

    return p;
}
//之前是多请求，保证顺序
// 现在不保证顺序


// 如果有一个失败-->catch，否则就是then
Promise.all([getMsg('./1.json'), getMsg('./2.json'), getMsg('./3.json')]).then(function (data) {
    //全体成功
    console.log('全体成功');
}).catch(function (err) {
    console.log('至少有一个失败');
});
