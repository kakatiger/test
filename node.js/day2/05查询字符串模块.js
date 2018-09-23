//查询字符串模块
/*const querystring=require('querystring');
//解析一个查询字符串:在URL中？后面的部分
//https://www.baidu.com/s?wd=%E4%B8%AD%E5%9B%BD&ie=utf-8&rsv_op=0712PU60gPLhWU7SOThaaRJUeaeJ906ahV8dSJUM4XSN3PIe6MOVTLP4cUdTV5bgQIXaZX6I25QaWX69Z6JZKhdW8h2cW8gV&tn=06074089_4_pg&ch=&rsv_su=ZU4IOa4YLdWTT1NcW5LKTJ4db4gOP1Uc8I5aMULVc02g8eR2M0N0L82fMhM0e60K3Qg64Z2h1QfadRf83I05URN2XTLL0Y5c
var str='lid=10&pname=apple&price=5555';
var obj=querystring.parse(str);
console.log(obj);

var person={
name:'tom',
age:20,
gender:'man'
}
var str1=querystring.stringify(person)
console.log(str1)*/


//url模块 
//如何得到一份URL中的查询字符串
const url=require('url');
var str='http://www.codeboy.com/product_details.html?lid=1'
var obj=url.parse(str)//将一个url转换为对象
console.log(obj.query)//获取url中的查询字符串

//将一个对象转换为url
var urlObj={
	protocol:'http:',//协议
	hostname:'www.tmooc.cn',//主机名（域名）
	pathname:'/course/100009.shtml',//文件的路径
	search:'?lid=10&pname=dell'
}
var urlstr=url.format(urlObj)
console.log(urlstr)