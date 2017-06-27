$(function(){
	var username=getCookie("uid");
	var nav1=$(".w-nav-1");
	var nav2=$(".w-nav-2");
	var register=$(".register");
	var img=$(".img");
	if(username){
		nav1.show();
		nav2.hide();
		$.ajax({
			url:'https://120.27.236.240:8443/interface/user/getUserInfo',
			data:{userID:username},
			type:'POST',
			dataType:'json',
			success:function(data){
				var prcture=$(".w-head-photo")
				if(data.code=="SUCCESS"){
					img.css({
						background:"url(https://120.27.236.240:8443"+data.body.photo+") no-repeat center center"
					}).next("span").html(data.body.shortName);
					register.children("a").html(data.body.userName);
					if(data.body.photo){
							prcture.css({
								background:"url(https://120.27.236.240:8443"+data.body.photo+") no-repeat center center"
							});
					}else{
						prcture.addClass('glyphicon').addClass('glyphicon-user').css({
							background:"#eee",	
						});
					};
				}
			}
		});
			$('.register').mouseover(function () {
				$(".personal-center-ul").show();
			});
			$('.register').mouseleave(function  () {
				$(".personal-center-ul").hide();
			});
			$('.username-quit').click(function () {
				clearCookie();
				location.href="homePage.html";
			});
	}
})
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
//修改密码
function oldPassword(){
	var username=getCookie("uid");
	var oldpassword=$("#oldPassword");
	$.ajax({
		url:'https://120.27.236.240:8443/interface/user/getUserInfo', 
		data:{userID:username},
		type:'POST',
		dataType:'json',
		success:function(data){
			if(data.code=="SUCCESS"){
				if($.md5(oldpassword.val())==data.body.password){
					oldpassword.next("div").html("");
					return true;
				}else{
					oldpassword.next("div").html("原始密码错误");
					return false;
				}
			}
		}
	});
}
function checkPassword(){
	var new1=$("#newPassword1");
		if(!(/^[0-9a-zA-Z]*$/.test(new1.val()))){
			new1.next("div").html("密码只能包含数字和字母");
			return false;	
		}else if((new1.val()).length>11 || (new1.val()).length<6){
			new1.next("div").html("密码长度只能在6到11之间");
			return false;
		}else{
	  	    	new1.next("div").html("");
	  	    	return true;
	  	}	
}
function newPassword(){
	var new1=$("#newPassword1");
	var new2=$("#newPassword2");
	if(new1.val()!=new2.val()){
		new2.next("div").html("两次密码不一致");
		return false;
	}else{
		new2.next("div").html("");
		return true;
	}
}
function confilmPassword(){
	var username=getCookie("uid");
	var new2=$("#newPassword2").val();
		oldPassword();
		checkPassword(); 
		newPassword();
		$.ajax({
			url:'https://120.27.236.240:8443/interface/user/modifyUserInfo',
			data:{userID: username,password:new2},
			type:"POST",
			dataType:"json",
			success:function(data){
				if(data.code== "SUCCESS"){
					alert("修改成功");
					location.href="account.html"
				}
			}
		})
}
