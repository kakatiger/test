//模块作用，计算两个数值的相加或者相乘
console.log('模块2')
function sum(a,b){
	return a+b
}
function cheng(a,b){
	return a*b
}
module.exports={
 sum: sum,
 cheng:cheng
}