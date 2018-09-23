const url=require('url');
const fs=require('fs');
var str='https://www.baidu.com/s?rsv_idx=1&wd=each&usm=2&ie=utf-8&rsv_cq=Buffer&rsv_dl=0_right_recommends_merge_21102&cq=Buffer&srcid=28310&rt=%E7%9B%B8%E5%85%B3%E6%9C%AF%E8%AF%AD&recid=21102&euri=45aa7fd104294698b353e413df3c1326)';
var obj=url.parse(str)
var str2=obj.query;


	fs.writeFile('./str.txt',str2,(err)=>{
		if(err) throw err;

		})

fs.readFile('./str.txt',(err,data)=>{
	
	var str3=data.toString();
	console.log(str3)
})
/*//导入文件系统模块
const fs=require('fs');
//写入文件，不存在创建
var filename='./num.txt';
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