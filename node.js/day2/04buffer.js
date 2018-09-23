//创建buffer——缓冲区中的数据
var buf1=Buffer.alloc(5,'asdfgh'); //默认存储为Unicode编码
console.log(buf1.toString())