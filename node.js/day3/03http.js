//获取天气
const http=require('http');
http.get('http://www.weather.com.cn/data/cityinfo/101010100.html.',(res)=>{
	console.log(res.statusCode);
	res.on('data',(buf)=>{
		console.log(buf.toString())
	});
})