var n1=1;
var n2=1;

//从第三项开始
for (var i=3;i<=12 ;i++ )
{	var tmp=n2
	n2=n1+n2
	n1=tmp;
}
console.log(n2)
//1 1 2 3 5 8