/*
for (j=1;j<=5 ;j++ )//外层循环
{var tri=''
for (i=1;i<=5 ;i++ )//内层循环
{tri+='*'
}
console.log(tri)
}
/*var j=1;
var tri=''
do
{for (var i=1;i<=1 ;i++ )
{tri+='*'
}
j++
	console.log(tri)
}
while (j<=5);*/


/*for (j=1;j<=5 ;j++ )//外层循环
{var tri=''
for (i=1;i<=j ;i++ )//内层循环
{tri+='*'
}
console.log(tri)
}*/

//打印九九乘法表简单版
for (var i=1;i<=9 ;i++ )//i代表行号
{var s=''
	for (var j=1;j<=i ;j++ )//j代表列号
	{ s+=i+'*'+j+'='+(j*i)+'  '
		
	}
	console.log(s)
}