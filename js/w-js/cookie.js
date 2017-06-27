function setCookie(name, value, expireday) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expireday*24*60*60*1000); //设置cookie的期限
    document.cookie = name+"="+escape(value)+"; expires"+"="+exp.toGMTString();//创建cookie
}
function getCookie(name)
{
   var name = escape(name);  //name为指定的名称  
        var allcookies = document.cookie;    
        name += "=";    
        var pos = allcookies.indexOf(name);    
        if(pos != -1){    
            var start = pos + name.length;    
            var end = allcookies.indexOf(";",start);      
           //这里是根据;分隔符来分隔出该名称的值，如果在设置Cookie时用的是,分隔，请替换成相应符号。  
            if(end == -1){    
                end = allcookies.length;    
            }    
            var value = allcookies.substring(start,end);    
            return unescape(value);    
        } else{    
            return "";    
        }  
}
function clearCookie(){
	var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
		if (keys) { 
		for (var i = keys.length; i--;) 
		document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
	} 
} 
/*时间戳转换*/
function add0(m){return m<10?'0'+m:m }
function format(timestamp,bol)
{
  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况

	  var time = new Date(timestamp);
	  var year = time.getFullYear();
	  var month = time.getMonth()+1;
	  var date = time.getDate();
	  var hours = time.getHours();
	  var minutes = time.getMinutes();
	  var seconds = time.getSeconds();
	  if (bol) {
	  return year+'-'+add0(month)+'-'+add0(date)+' '+add0(hours)+':'+add0(minutes)+':'+add0(seconds);
	
	  } else{
	      return year+'-'+add0(month)+'-'+add0(date);
	  }
  
}