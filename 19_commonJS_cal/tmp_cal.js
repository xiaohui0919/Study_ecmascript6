'use strict';

var obj = {
    add: function add(n1, n2) {
        return n1 + n2;
    }
};

// 向外部导出
module.exports = obj; //let cal=require('./cal.js')
