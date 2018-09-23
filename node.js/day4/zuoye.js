const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.listen(3000,()=>{
	console.log('服务器OK');
});
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
	extended:false
}));

app.post('/register',(req,res)=>{
	console.log(req.body)
	res.send(`亲爱的${req.body.uname} <br>恭喜您注册成功`)
})
