//隐藏着一个函数
//function(exports,require,module,__filename,__dirname){}
//exports 导出  
//require 导入
//module 模块
//__filename 显示完整的路径和文件名称
//__dirname
//一个文件就是一个模块
//一个文件的内部就称为文件（局部）作用域
require('./模块_2.js');
console.log(__filename);
console.log(__dirname);