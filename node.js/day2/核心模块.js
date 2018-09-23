//核心模块的使用
const querystring=require('querystring');//查询字符串
var str='lid=9&pname=dell&price=4000'
//把这种形式的字符串解析为对象
var obj=querystring.parse(str);
console.log(obj)