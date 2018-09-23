const fs=require('fs');
//查看文件状态
//异步函数使用回调函数来获取结果
/*fs.stat('./1.text',(err,stats)=>{
	//err：查看失败显示的信息
	//stats：把查看到的信息放入stats中
	if (err)//如果有错误，程序不会往后进行
	{
		throw err;
	}
	console.log('查看成功');
	//console.log(stats);
	console.log(stats.isFile());
	console.log(stats.isDirectory())
})*/

//使用同步函数查看文件状态
/*var res=fs.statSync('./1.text');
console.log(res)
console.log(res.isFile())*/

//2创建目录
/*fs.mkdir('./myDir',(err)=>{
	if (err) throw err;//如果有错误，抛出
	console.log('目录创建成功')
})*/

//删除目录
/*fs.rmdir('./myDir',(err)=>{
	if(err) throw err;
	console.log('删除成功')
})*/
//练习
/*fs.stat('./youdir',(err)=>{
	if (err)
	{
		fs.mkdir('./youdir',(err)=>{
			if(err) throw err;
			console.log('创建成功')
		})
	}
})
*/

//4读取目录
/*fs.readdir('./myDir',(err,files)=>{
	if(err) throw err;
	console.log(files)
})

//读取文件
fs.readFile('./1.text',(err,data)=>{
	if(err) throw err;
	console.log(data.toString())
})*/


//6.文件创建——借助写入文件的方法
//如果文件已经存在，会清空文件中的内容，再写入
/*fs.writeFile('./date.text','hello',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('写入成功')
})*/

//7文件创建——追加写入
/*fs.appendFile('./date.txt','world\n',(err)=>{
	if(err) throw err
	console.log('再次成功')
})

//8删除文件
fs.unlink('./date.text',(err)=>{
	if(err) throw err;
	console.log('删除成功')
})*/
var filename='./num.txt';
fs.stat(filename,(err,stats)=>{
	if (err)
	{
		fs.writeFile(filename,1,(err)=>{
			if (err) throw err;
		})
	}
});
fs.readFile(filename,(err,data)=>{
	
	var num= data.toString();
	num++
	console.log(num);
	fs.writeFile(filename,num,(err)=>{
		if(err) throw err;
	})
})







