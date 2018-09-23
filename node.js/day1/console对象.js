
//console对象
console.log(1);
console.info(2);//打印消息
console.warn(3);//打印警告
console.error(4);//打印错误
//计算for循环的运行时间
console.time('loop');//计时开始
for (var i=0;i<1000 ;i++ )
{
 
}
console.timeEnd('loop');//计时结束
console.time('while')
var i=0
while (i<10000)
{
i++
}
console.timeEnd('while')
console.time('do')
var j=0
do
{
	j++
}
while (j<10000);
console.timeEnd('do')