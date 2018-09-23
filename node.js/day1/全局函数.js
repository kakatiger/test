/*//一次性定时器
//开启
var timer=null
timer=setTimeout(function(){console.log('滴滴滴')},3000);

//清除
clearTimeout(timer);*/
//2.周期性定时器
/*var i=0
var timer=null
timer=setInterval(()=>{
	i++;
	console.log(i);
	if (i>4)
{
	clearInterval(timer);

}

},3000);*/
/*
var i=0
var timer=null;
timer=setInterval(function(){
	console.log('hello');
	i++;
	while (i==10)
	{clearInterval(timer);
	 break;
	}
},1000)*/

//nodejs的事件
process.nextTick(function(){
	console.log(123)
})

setImmediate(function(){
	console.log('hello')
});