var str='https://www.baidu.com/s?rsv_idx=1&wd=each&usm=2&ie=utf-8&rsv_cq=Buffer&rsv_dl=0_right_recommends_merge_21102&cq=Buffer&srcid=28310&rt=%E7%9B%B8%E5%85%B3%E6%9C%AF%E8%AF%AD&recid=21102&euri=45aa7fd104294698b353e413df3c1326)';
const url=require('url');
const fs=require('fs');
const querystring=require('querystring');
var obj1=url.parse(str);
var obj2=querystring.parse(obj1.query);
var str=''
for(var i in obj2){
	obj2[i]
	fs.appendFileSync('./str.txt',obj2[i])
}


