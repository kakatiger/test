//文件系统模块
//const fs = require('fs');
//查看文件的状态
//异步函数使用回调函数来获取结果
/*fs.stat('./1.txt',(err,stats)=>{
	//err：查看失败显示的信息
	//stat：把查看到的信息放入到stats中
	if (err){//如果有错误，抛出错误，程序不会往后运行
		throw err;
	}
	console.log('查看成功');
	console.log(stats);
	//查看的是文件还是目录
	console.log(stats.isFile());
	console.log(stats.isDirectory());
});
//使用同步函数查看文件状态
const fs = require('fs');
var str = fs.statSync('./1.txt');
console.log(str.isFile());
*/
//2.创建目录
/*fs.mkdir('./myDir',(err)=>{
	if (err) throw err;//如果有错误，抛出错误，程序不会往后运行
});
console.log('创建成功')
*/
//3.删除目录
/*fs.rmdir('./myDir',(err)=>{
	if(err){throw err}
	console.log('删除成功')
})
*/
//const fs=require('fs');
//如果不存在目录
//有错误，说明文件或者目录不存在
/*fs.stat('./mydir',(err,stats)=>{
	if(err) {
		//创建目录
		fs.mkdir('./mydir',(err)=>{
	        if(err){throw err}
			})
		console.log('创建成功')
				}
})
//读取目录
fs.readdir('./mysir',(err,files)=>{
	if(err){throw err};
	console.log(files);//结果是数组
})
//读取文件
fs.readFile('./1.txt',(err,data)=>{
	if(err) throw err;
	console.log(data)
})
//6.文件的创建——借助写入文件的方法
//如果文件已存在，会清空文件中的内容，然后写入
fs.writeFile('./data.txt','hello',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('写入成功')
})
//7.文件创建——追加写入
fs.appendFile('./data.txt','world',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('写入成功')
})
//8.删除文件
fs.unlink('./data',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('删除成功')
})*/
const url = require('url');
var str = 'https://www.jd.com/?cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_45363_&utm_term=b089f8c55b66487e878435cfc383cc94-p_1&abt=3';
var obj = url.parse(str);
var obj1 = obj.query;
console.log(obj1);

const fs=require('fs');
fs.stat('./str.txt',(err,stats)=>{
	if(err){
		fs.writeFile('./str.txt',obj1,(err)=>{
			if(err) throw err;
		})
			console.log('创建成功')
	}
})
