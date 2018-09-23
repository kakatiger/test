//导入文件系统模块
const fs=require('fs');
//写入文件，不存在创建
/*var filename='./num.txt';
//1.判断文件是否存在
fs.stat(filename,(err,stats)=>{
  //有错误说明文件不存在，则创建
  if(err) {
    fs.writeFile(filename,1,(err)=>{
	  if(err) throw err;

	});
  }
});
//2.读取num.txt，把结果+1,
fs.readFile(filename,(err,data)=>{
  var num=data.toString();
  num++;
  console.log(num);
  //3.把+1后的结果再次写入到num.txt中
  fs.writeFile(filename,num,(err)=>{
    if(err) throw err;
  });
});*/
var filename='./num.txt'
var res=fs.existsSync(filename);


