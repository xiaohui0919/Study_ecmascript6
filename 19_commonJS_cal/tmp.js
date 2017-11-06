'use strict';
// 1：获取按钮，添加点击事件

var btn = document.querySelector('button');
// 2：获取计算器的对象
var cal = require('./tmp_cal.js');

btn.onclick = function () {
    // 获取n1和n2进行计算
    var n1 = document.getElementById('n1').value - 0;
    var n2 = document.getElementById('n2').value - 0;

    var sum = cal.add(n1, n2);

    document.getElementById('result').value = sum;
};
