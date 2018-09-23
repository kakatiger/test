//同步和异步
var a=1;

for (var i=0;i<5 ;i++ )
{
	console.log('for')
		setTimeout(function(){
	console.log('回调');
},3000);
}
//异步函数，在程序最后执行

console.log('hello')
