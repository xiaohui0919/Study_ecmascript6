# ES6 笔记

#### ES6的相关介绍
* ES6是一个规范，不同的浏览器做了不同的实现，所以有的浏览器不一定完全支持
* ES6 的出现是为了让JavaScript更好，更健壮更适应大型应用的开发
* ES6 也叫做ECMA2015

#### 严格模式
* 严格模式是在ES5的时候就有了
* 开启严格模式的代码 `use strict;`
* 就是限制代码编写
    - 1:在严格模式下函数中的this禁止指向全局对象
        + 开启后是undefined
    - 2:在非严格模式下可以使用with声明,作用就是简化对于某些对象操作的代码
        + 严格模式禁止使用with语句的声明

```javascript
    只要是开启了严格模式  with这一行代码就会报错
 //针对var person做简化操作
        var person = {   name:'jack',age:18 };
        //修改name,age
        //person.name = 'rose';
        //person.age = 19;
        //console.log(person.name);
        
        with(person){ //报错：Strict mode code may not include a with statement
            //都是针对person对象的操作，省略person.
            name = 'rose';
            age = 19;
            console.log(name);
        }

        console.log(person);
```

#### 严格模式和ES6
* 严格模式是严格模式 ES6是ES6，两者其实并无很大的关联
* 严格模式：是代码的限制
* ES6是语法规范: 增加了相关的代码功能
* 在ES6中部分的关键字必须在严格模式开启下才能使用
    - 凡是ES6就用严格模式

#### LET声明变量关键字
* 见03案例
* let声明的关键字，变量的查找机制是一样的，逐级向上查找
    - 1:如果当前作用域内有，就用当前的
    - 2:如果没有，就向上级作用域查找
* let是块级作用域 {} ，不会提升成全局变量
* 在同一个块级作用域中不允许声明同名变量

#### CONST
* 第一位同事觉得圆周率是 var PI = 3.1415926 ，开发足球游戏
* 第二位同事开发篮球游戏 PI = 3.14
* 常量的声明就是为了不让其他人修改
* 不能被二次赋值，赋值:  被声明的对象 = xxx;
    - `const person = {};     person = '123';`
* 而可以挂载或者修改对象的属性
    - `const person = {};     person.name = '123';`
* 不可以同一个块级声明同名变量

#### let 和const
* 都是块级作用域{} ，不会提升成全局变量
* let 声明变量的，const 是声明常量的
* const特殊的注意事项
    - const必须一次性初始化



#### 模板字符串
* 可以包含换行输出任意想要的东西
* 特点: 1:可以包含换行
    - 2:可以嵌入变量  `${对象名.属性}`
    - 使用: `包裹字符串`  反引号，在tab键的上面，esc的下面

#### 扩展函数
* 字符串4个
    - 判断字符串对象中是否包含参数,返回boolean
        + `字符串对象.includes('xxx');`
    - 判断字符串对象是否以参数开头,返回boolean
        + `字符串对象.startsWith('xxx');`
    - 判断字符串对象是否以参数结尾,返回boolean
        + `字符串对象.endsWith('xxx);`
    - 了解: 字符串对象调用接受参数，返回参数倍的字符串
        + `字符串对象.repeat(500);`
* 数学 1个
    - 掌握：`Math.trunc(小数);`
        + 截取整数作为返回值，去除掉小数部分
* 操作数组 2个
    - 数组对象.查找元素, 返回找到的元素
        + `arr.find(fn);`
        + fn参数:
            * `function(ele,index,arr){ //return true 或者false，结束遍历返回元素  }    `
    - 数组对象.查找元素索引, 返回元素的索引
        + `arr.findIndex(fn);`
            * `function(ele,index,arr){ //return true 或者false，结束遍历返回元素的索引  }   ` 
    - 总结: return的时候要写判断的表达式，而不能是赋值
        + 如果没有查找到元素
            * find函数返回undefined
            * findIndex函数返回-1

#### 箭头函数( => )
* 应用场景（案例中是特定的一个场景，开发中可能不常见）
* 箭头函数特点
    - 其本身没有this，会根据声明时上级的function绑定this
    - 以前的this是根据运行时的对象所绑定，是多变的

#### 箭头函数的基本使用
* 极简写法：
    - 心法: 一个参数省略左边小括号，一行代码省略右边大括号
        + ` let fn = num => num;`
        + `num => num`  左边是形参，右边是返回值
    - 多个参数或者没有参数，必须有小括号
    - 如果多行代码，必须有大括号

#### 箭头函数的注意事项
* 箭头能不能做构造函数？ 因为本身就没有this
* 不管是this，还是arguments本身箭头函数都没有，会根据声明时的上级function来绑定

#### ES6函数简写
* 在对象中声明属性，是一个函数
    - `let obj = { init:function(){ } }`
    - `let obj = { init         (){ } }`
    - 省略了:function
    - `let obj = { init:function(n1,n2){ } };`
    - `let obj = { init(n1,n2){ } };`
* ES6函数简写实际就是ES5的普通函数的便捷方式
* ES6中的箭头函数，就是为了处理this相关指向
* 注意:
    - __ES6的函数简写实际上功能与ES5函数功能一致，就是写起来简单点，只能用在属性声明上,ES6的箭头函数，可以动态的根据声明时的上级function绑定this，function和ES6函数简写，this都是根据运行时的对象绑定__

#### 发起多次ajax请求
* 控制顺序
* 万恶的回调函数嵌套地狱

#### promise
* 承诺, 承诺成功, 承诺失败
* 后续, 成功后续, 失败后续
* 代码成功, resovle , then
* 代码失败, reject  , catch
* 也可以通过函数传递参数
* promise的面试题
    - 在promise中有三种状态，该状态一经改变无法回退，无法暂停
    - resovled(fulfilled) 已满足，已解决，该状态在调用resovle函数的时候改变
    - rejected 已拒绝 ,该状态在调用reject函数的时候改变
    - 在没有调用resovle或者reject的时候的状态，叫做pending 待发
* 1:保障顺序执行  需要使用多次then,并且每次在then的回调函数中return一个promise对象
    - 多次then,记得return
* 2:不保证顺序，保证全体都成功  Promise.all([Promise对象1,Promise对象2])


#### setter||getter
* 这种实现方式是基于ES5的Object.defineProperty的函数，来给对象设置获取，和设置值的一些相关行为(类似监视设置及获取)
* `Object.defineProperty(obj,'name',options)`
* options:  `{ set:function(){},get:function(){} }`
            *  `obj.name= 'xxx' `,这行代码执行的时候会触发set对应function
            *  `console.log(obj.name) `,这行代码执行的时候会触发get对应function

* 当鼠标指向该属性，准备点开看的时候显示，invoke property getter

#### 使用babel转换（了解）
* js的语法转换器  可以转换  es6/es7/react
* babel当前默认只支持转换ES6的关键字 let const 
    - 并不转换函数 Promise
* 预设 presets 设置从es6/es7/react来转换的关键字
* 插件 plugins 转换ES对应函数
* 安装: `安装全局命令行工具 npm install -g babel-cli`
    - cli 命令行工具
    - gui 图形化工具
* 配置babel的配置文件(在命令行的当前目录下.babelrc的文件)
    - 内容是一个json格式
        + 1:预设 关键字
        + 2:插件 函数
* 在存在.babelre文件的目录下打开命令行
    - 命令`babel 入口文件(./index.js) -o 出口文件(./build.js)`




#### 使用browserify转换require（了解）
* 解析js代码，将require做一个转换，根据require来代表模块的引入分析代码
* 解决使用require来做模块依赖的工具，做2个1
* 全局安装 `npm install browserify -g`
* 在当前命令行输入 `browserify 入口文件  出口文件`
    - 分析入口文件中的require,将其require的文件转换成函数的方式，来供当前代码使用，产出到出口文件中

#### babel总结
* 是什么？ js语法转换器 es6/es7/react
    - babel中有预设 presets -> 转换关键字
    - 有插件 plugins -> 转换函数

#### browserify总结
* 是什么？ 将require进行解析模块之间依赖，转换代码
* browserify 和 未来要学的webpack  同一年出来，功能都差不多
    - webpack比起使用得多得多

#### commonJS
* commonjs规定，一个文件就是一个模块
* 规范        实现                模块导入                   模块导出
* AMD      requireJs  define('id',['依赖1'],fn(依赖1){})   return obj;
* CMD        seajs             require('文件路径')      module.exports=x;
* commonJs   nodejs            require('文件路径')      module.exports=x;
* ES6      ECMA2015定义          import                      export
* UMD       通用模块定义支持AMD  commonJS  和非模块化

```javascript
(function (root, factory) {  
    if (typeof exports === 'object') {  判断当前是否存在该对象，说明是在commonJS规范的实现下运行，有nodejs 有seajs
        module.exports = factory();  按其方式做对象的导出
          
    } else if (typeof define === 'function' && define.amd) {  
        define(factory); 判断当前是否有该对象 说明当前环境是AMD的规范的实现requireJS 
          
    } else {  
        否则就是浏览器环境，就给window挂载属性
        root.eventUtil = factory();  
    }  
})(this, function() {  
    // module  
    return {  
        addEvent: function(el, type, handle) {  
            //...  
        },  
        removeEvent: function(el, type, handle) {  
              
        },  
    };  
});  

```


#### 使用commonjs规范来完成计算器
* 计算器对象基于commonjs 一定规范中要求，一个模块一个文件
    - cal.js
* index.html + index.js 引入cal.js -> require()
* 我们需要工具的支持：
    - 解决require 需要browserify
    - 解决ES6 需要 babel  
        + 解决关键字: presets
        + 解决函数：plugins

#### 总结commonjs在浏览器中运行
* 1:模块的导出使用 module.exports = 导出的对象;
* 2:模块的导入使用 let obj = require('文件路径');

#### ES6的学习
* 严格模式和ES6 本身两码事
    - 严格模式，让编写代码更为严格，相关的制约
    - ES6 增加了一些关键字和函数扩展了语言的功能
    - 用ES6就使用严格模式，原因是ES6中有部分必须在严格模式下
* 关键字
    - let、const
    - 变量、常量，都是块级作用域，不会自动提升成全局变量，同块中不允许同名声明
    - const 必须一次性完成初始化
        + 不能被二次赋值，但是可以修改属性值
* 模板字符串
    - 使用`反引号`
    - 可以包含换行
    - 可以嵌入变量 ${对象.变量名}
* 扩展函数
    - 字符串3个  字符串对象.includes||startsWith||endsWith 
        + 都接受字符串参数，都是返回boolean
    - 数学1个
        + Math.trunc(num) 截取到整数部分
    - 操作数组2个
        + let ele = arr.find(fn);
        + let index = arr.findIndex(fn);
    - fn中参数 ele,index,arr 
    - 必须要return 布尔值;
    - 没有找到的话: find返回undefined findIndex返回-1
* 箭头函数
    - 箭头函数本身没有this、arguments，会根据声明时向上级的function绑定
    - 极简写法 num => num;
        + 左参数，右返回值
        + 参数只有一个，左边小括号可省
        + 代码只有一行，右边大括号可省
    - 不可以作为构造函数使用
* promise
    - 承诺:
        + 成功 resovle 后续操作  then
        + 失败 reject  后续操作  catch
        + All和顺序执行的区别
            * all函数是保证都成功或者某个失败
            * 顺序执行能控制整个流程顺序
* setter和getter
    - 监视对象的属性发生修改或者获取
    - `Object.defineProperty(obj,propName,options);`
    - `Object.defineProperty` 本身只被IE9及以上支持
* 转换工具
    - babel是什么
    - browserify是什么
* 模块的概念
    - 规范 实现
* commonjs模块
    - 导入 require('文件');
    - 导出 module.exports = obj;