//作页
var year=2000
var res1=year % 4
var res2=year % 100
var res3=year % 400
res1 == 0 && (res2 != 0 || res3 == 0) ? console.log('ruinian') : console.log('bushiruinian') 
//res1 !=0 || (res2 ==0 && res3 !=0) && console.log('bushiruinian')


