(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./tmp_cal.js":2}],2:[function(require,module,exports){
'use strict';

var obj = {
    add: function add(n1, n2) {
        return n1 + n2;
    }
};

// 向外部导出
module.exports = obj; //let cal=require('./cal.js')

},{}]},{},[1]);
