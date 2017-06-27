/*验证*/
$(".keshiHeight").css({
	height:document.documentElement.clientHeight
})
function checkPhone(){
    var phone = document.getElementById('w-phone-number').value; 
    var errorMess=document.getElementById("w-phone-error");
	    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){ 
	        errorMess.innerHTML="你的手机号不正确";
	        return false; 
  	    }else{
  	    	errorMess.innerHTML="";
  	    	return true;
  	    }	
}
function checkPassword(){
	var pass=document.getElementById("w-password").value;
	var errorPass=document.getElementById("w-password-error");
		if(!(/^[0-9a-zA-Z]*$/.test(pass))){
			errorPass.innerHTML="密码只能包含数字和字母";
			return false;	
		}else if(pass.length>11 || pass.length<6){
			errorPass.innerHTML="密码长度只能在6到11之间";
			return false;
		}else{
	  	    	errorPass.innerHTML="";
	  	    	return true;
	  	}	
}
var verificationCode=drawPic();
function checkCode(){
	var testCode=$(".w-input-code");
	var errorPrompt=$("#w-code-error");
	if(testCode.val().length==0){
		errorPrompt.html("验证码不能为空");
		return false;
	}else if(testCode.val().toLowerCase( ) != verificationCode.toLowerCase( ) ){
		errorPrompt.html("验证码输入不正确");
		verificationCode=drawPic();
		return false;
	}else{
		errorPrompt.html("");
		return true;
	}
}
/*短信*/
var countdown=60; 
function setTime(val) { 
	if (countdown == 0) { 
		clearInterval(timer);
		val.removeAttribute("disabled");    
		val.value="获取短信验证码"; 
		countdown =60;	
		$(val).css({
			background: '#29c9a0',
		});
		return false;
	}else { 
		val.setAttribute("disabled", true); 
		val.value="重新发送(" + countdown + ")"; 
		countdown--; 
		$(val).css({
			background: '#e2e2e2',
		});
	} 
	var timer=setTimeout(function() { 
		setTime(val)
		},1000) 	
} 
var uuID=0;
function getNote(val,n){
	if(checkPhone()&&checkPassword()&&checkCode()){
		setTime(val);
		var phone=$("#w-phone-number");
		var token=$.md5(phone.val()+n+"9181832f6b8c270k");
		$.ajax({
			url:'https://120.27.236.240:8443/phoneMsg',
			data:{phone:phone.val(),type:n,phoneToken:token},
			type:'GET',
			dataType:'json',
			success:function(data){
				if(data.code=="SUCCESS"){ 	
					uuID=data.uuid;
					console.log(data.uuid);
				}
			}
		}) 
	}	
}
/*注册*/
function login(){
	if(checkPhone()&&checkPassword()&&checkCode()){
		var phone=$("#w-phone-number");
		var pass=$("#w-password");
		var duanxin=$("#w-duanxin-input");
		var note=$("#w-note-error");
		$.ajax({
			url:'https://120.27.236.240:8443/interface/user/register',
			data:{username:phone.val(),password:pass.val(),phoneCode:duanxin.val()},
			type:'POST',
			dataType:'json',
			success:function(data){
				if(data.code=="106"){
					note.html(data.message);
				}else if(data.code=="SUCCESS"){
					alert("注册成功");
					note.html("");
				}else if(data.code=="105"){
					$("#w-phone-error").html(data.message);
				}else{
					note.html("");
				}
			}
		}); 
	}
}
/*验证码*/
function randomNum(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }
    function randomColor(min,max){
        var _r = randomNum(min,max);
        var _g = randomNum(min,max);
        var _b = randomNum(min,max);
        return "rgb("+_r+","+_g+","+_b+")";
    }
    document.getElementById("canvas").onclick = function(e){
        e.preventDefault();
        drawPic();
    };
    function drawPic(){
        var $canvas = document.getElementById("canvas");
        var _str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var _picTxt = "";
        var _num =4;
        var _width = $canvas.width;
        var _height = $canvas.height;
        var ctx = $canvas.getContext("2d");
        ctx.textBaseline = "bottom";
        ctx.fillStyle = randomColor(180,240);
        ctx.fillRect(0,0,_width,_height);
        for(var i=0; i<_num; i++){
            var x = (_width-10)/_num*i+10;
            var y = randomNum(_height/2,_height);
            var deg = randomNum(-45,45);
            var txt = _str[randomNum(0,_str.length)];
            _picTxt += txt;
            ctx.fillStyle = randomColor(100,100);
            ctx.font = randomNum(40,40)+"px SimHei";
            ctx.translate(x,y);
            ctx.rotate(deg*Math.PI/180);
            ctx.fillText(txt, 0,0);
            ctx.rotate(-deg*Math.PI/180);
            ctx.translate(-x,-y);
        }
        for(var i=0; i<_num; i++){
            ctx.strokeStyle = randomColor(10,256);
            ctx.beginPath();
            ctx.moveTo(randomNum(0,_width), randomNum(0,_height));
            ctx.lineTo(randomNum(0,_width), randomNum(0,_height));
            ctx.stroke();
        }
        for(var i=0; i<_num*10; i++){
            ctx.fillStyle = randomColor(0,255);
            ctx.beginPath();
            ctx.arc(randomNum(0,_width),randomNum(0,_height), 1, 0, 2*Math.PI);
            ctx.fill();
        }
        return _picTxt;
    }
 /*登录*/
function wRegister(){
	if(checkPhone()&&checkPassword()&&checkCode()){
		var phone=$("#w-phone-number");
		var pass=$("#w-password");
		var phoneError=$("#w-phone-error");
		$.ajax({
			url:'https://120.27.236.240:8443/interface/user/login',
			data:{username:phone.val(),password:pass.val()},
			type:'POST',
			dataType:'json',
			success:function(data){
				if(data.code=="101"){
					phoneError.html(data.message);
				}else if(data.code=="SUCCESS"){
					var name=data.body.userID;
					setCookie("uid",name,1);
    				location.href="homePage.html";
				}
			}
		})
	}	 
}
function setCookie(name, value, expireday) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expireday*24*60*60*1000); //设置cookie的期限
    document.cookie = name+"="+escape(value)+"; expires"+"="+exp.toGMTString();//创建cookie
}
/*忘记密码*/
function forgetPass(){
	checkPhone();
	checkPassword();
	checkCode();
	var phone=$("#w-phone-number");
	var code=$("#w-duanxin-input")
	var pass=$("#w-password");
	var phoneError=$("#w-phone-error");
	var nodeError=$("#w-note-error")
	$.ajax({
		type:"get",
		url:"https://120.27.236.240:8443/interface/user/resetPassword",
		data:{uuid:uuID,phone:phone.val(),phoneCode:code.val(),pwd:pass.val()},
		dataType:"json",
		success:function(data){
			if(data.code=="112"){
				nodeError.html(data.message);
			}else if(data.code=="SUCCESS"){
				alert("修改成功");
				window.location.href="register.html";
			}
		}
	});
}
