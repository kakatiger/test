//获取页面元素的函数
function $(id){
	 return document.getElementById(id);
}
function createXhr(){
	var xhr=null;
	if (window.XMLHttpRequest)
	{
		xhr=new XMLHttpRequest();
	}else{xhr=new ActiveXObject('Microsoft.XMLHttp')}
	return xhr;
}