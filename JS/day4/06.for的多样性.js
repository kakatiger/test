//写法一
/*for (var i=1,sum=0;i<=10 ;i++ )
{console.log(sum+=i)
}*/
//写法2
/*var sum=0
var i=1
for (;i<=10 ; )
{sum+=i;
i++

}
console.log(sum)
var sum=0
var i=1
for (;; )
{sum+=i;
i++;
	
if (i==11)
{break;
}
}
console.log(sum)
//连续打印*****
var sum='';
for (i=1;i<=5 ;i++ )
{console.log(sum+='*')
}*/
//打印九九乘法表弟5行。
var sum1='';
var sum2='';
var sum3='';
var sum4='';
var sum5='';
var sum6='';
var sum7='';
var sum8='';
for (i=1;i<=1 ;i++ )
{sum1+=(i+'*1='+(i*1)+' ' );
}
for (i=1;i<=2 ;i++ )
{sum2+=(i+'*2='+(i*2)+' ' );
}
for (i=1;i<=3 ;i++ )
{sum3+=(i+'*3='+(i*3)+' ' );
}
for (i=1;i<=4 ;i++ )
{sum4+=(i+'*4='+(i*4)+' ' );
}
for (i=1;i<=5 ;i++ )
{sum5+=(i+'*5='+(i*5)+' ' );
}
for (i=1;i<=6 ;i++ )
{sum6+=(i+'*6='+(i*6)+' ' );
}
for (i=1;i<=7 ;i++ )
{sum7+=(i+'*7='+(i*7)+' ' );
}
for (i=1;i<=8 ;i++ )
{sum8+=(i+'*8='+(i*8)+' ' );
}
var sum9='';
for (i=1;i<=9 ;i++ )
{//每次拼接一个值，必须加空格。
sum9+=(i+'*9='+(i*9)+' ' );

}
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);
console.log(sum6);
console.log(sum7);
console.log(sum8);
console.log(sum9);
