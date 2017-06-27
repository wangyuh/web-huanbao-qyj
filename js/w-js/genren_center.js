/*头部加载*/
$("#header").load("commonTop.html");
var username=getCookie("uid");
var container=$(".w-investment-container");
/*个人信息*/
function getInfo(){
	var prcture=$("#w-head-prcture");
	var name=$("#w-name");
	var accout=$("#w-userName");
	$.ajax({
		url:'https://120.27.236.240:8443/interface/user/getUserInfo',
		data:{userID:username},
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.code=="SUCCESS"){
				prcture.css({
					background:"url(https://120.27.236.240:8443"+data.body.photo+") no-repeat center center"
				});
				name.val(data.body.shortName);
				accout.html(data.body.userName);
			}
		}
	})
}
function changeName(){
	var name=$("#w-name").val();
	if(!name){
		name=" ";
	};
	$.ajax({
		url:'https://120.27.236.240:8443/interface/user/modifyUserInfo',
		data:{userID:username,nickname:name},
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.code=="SUCCESS"){
				location.href="info.html";
			}
		}
	})
}
/*头像*/
$('#saveChange').click(function () {
		var url1=new FormData($('#uploadForm')[0])
		$.ajax({
			    url: 'https://120.27.236.240:8443/interface/user/uploadPhoto?userID='+username,
			    type: 'POST',
			    cache: false,
			    data: url1,
			    processData: false,
			    contentType: false
			})
})
$("#fileId").change(function(){
//			if(typeof FileReader == 'undefined') {
//			    result.innerHTML = "抱歉，你的浏览器不支持FileReader";
//			}
		    // 检查是否为图像类型
		    var simpleFile = document.getElementById("fileId").files[0];
		    if(!/image\/\w+/.test(simpleFile.type)) {
		        alert("请确保文件类型为图像类型");
		        return false;
		    }
		    var reader = new FileReader();
		    // 将文件以二进制文件读入页面中
		    reader.readAsBinaryString(simpleFile);
		    reader.onload = function(f){
		        var src = "data:" + simpleFile.type + ";base64," + window.btoa(this.result);
		        $("#w-head-prcture").css({
		        	background:"url("+src+") no-repeat"
		        })
		    }
})
/*关注企业*/
function myCompanys(types){
	if(!username){
		alert("请先登录");
		container.html("还未登录").addClass("zanwuguanzhu");
		return false;
	}
	container.empty();
	$.ajax({
		url:"https://120.27.236.240:8443/interface/options/Follow/getListByUserID",
		data:{userID:username,type:types},
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.code=="SUCCESS"){
				if(data.body.length<1){
					container.html("暂无关注").addClass("zanwuguanzhu");
				}else{
					for(var i=0;i<data.body.length;i++){
						var content='<div class="w-conpany-infor-box">'
											+'<div class="w-conpany-prc left" style="background: url(img/w-img/U0ZFM2PI.png);"></div>'
											+'<div class="w-infor-right-box left">'
												+'<div class="w-conpany-name">'
													+'<a href="javascript:;">'+data.body[i].enterpriseinfo.enterprisenamech+'</a>'
												+'</div>'
												+'<div class="w-legal-man">'
													+'法定代表人：<span>'+data.body[i].enterpriseinfo.legalperson+'</span>'
													+'<span>成立5-10年</span>'
													+'<span class="w-icon-cunxu">'+data.body[i].enterpriseinfo.operatingstate+'</span>'
												+'</div>'
												+'<div class="w-date-time">'
													+'发布日期：<span>'+data.body[i].enterpriseinfo.establishmentdate+'</span>'
												+'</div>'							
											+'</div>'
											+'<div class="w-gr-stale-box right">'
												+'<div class="w-clear-collect right" onclick="deleteConpany('+data.body[i].enterpriseID+','+types+')">取消关注</div>'
											+'</div>'
										+'</div>';
							container.append(content);
							$(".spinner").hide();
					}
				}		
			}
		}
	});
}
/*取消关注企业*/
function deleteConpany(conpanyID,types){
	$.ajax({
		url:"https://120.27.236.240:8443/interface/options/Follow/delete",
		data:{enterpriseId:conpanyID,userID:username},
		type:"get",
		dataType:'json',
		success:function(data){
			if(data.code=="SUCCESS"){
				myCompanys(types)				
			}
		}
	});
}
/*取消收藏*/
function deleteCollect(tID,types){
	$.ajax({
		url:"https://120.27.236.240:8443/interface/options/Collect/delete",
		data:{tenderId:tID,userID:username,type:types},
		type:"GET",
		dataType:"json",
		success:function(data){
			if(data.code=="SUCCESS"){
				collectionZhaobiao(types)
			}
		}
	})
}
/*我的收藏——招中标*/
function collectionZhaobiao(types){
	if(!username){
		alert("请先登录");
		container.html("还未登录").addClass("zanwuguanzhu");
		return false;
	}
	container.empty();
	$.ajax({
		url:"https://120.27.236.240:8443/interface/options/Collect/getListByUserID",
		data:{userID:username,type:types},
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.code=="SUCCESS"){
				if(data.body.length<1){
					container.html("暂无收藏").addClass("zanwuguanzhu");
				}else{
						for(var i=0;i<data.body.length;i++){
						var content='<div class="w-conpany-infor-box">'
												+'<div class="w-conpany-prc left" style="background: url(img/w-img/U0ZFM2PI.png);"></div>'
												+'<div class="w-infor-right-box left">'
													+'<div class="w-conpany-name">'
														+'<a href="javascript:;">'+data.body[i].tenderPeople+'</a>'
													+'</div>'
													+'<div class="w-legal-man">'
														+'区域：<span>'+data.body[i].projectName+'</span>'
													+'</div>'
													+'<div class="w-date-time">'
														+'发布日期：<span>'+format(data.body[i].createTime)+'</span>'
													+'</div>'
												+'</div>'
												+'<div class="w-gr-stale-box right">'
													+'<div class="w-state-message left">招标预告</div>'
													+'<div class="w-clear-collect right" onclick="deleteCollect('+data.body[i].tenderID+','+types+')">取消收藏</div>'
												+'</div>'
											+'</div>';
								container.append(content);
								$(".spinner").hide();
					}
				}
			}
		}
	});
}
/*我评价的企业*/
function myEvaluateConpany(){
	if(!username){
		alert("请先登录");
		container.html("还未登录").addClass("zanwuguanzhu");
		return false;
	}
	$.ajax({
		type:"get",
		url:"https://120.27.236.240:8443/env/interface/comment/getMyComments",
		data:{userId:username},
		dataType:'json',
		success:function(data){
			if(data.code=="SUCCESS"){
				if(data.body.length<1){
					$(".spinner").html("暂无评价").addClass("zanwuguanzhu");
				}else{
					for(var i=0;i<data.body.length;i++){
						var content='<div class="w-conpany-infor-box">'
												+'<div class="w-conpany-prc left" style="background: url(https://120.27.236.240:8443'+data.body[i].photo+');"></div>'
												+'<div class="w-infor-right-box left">'
													+'<div class="w-conpany-name">'
														+'<a href="javascript:;">'+data.body[i].entName+'</a>'
														+'<span>存续</span>'
													+'</div>'
													+'<div class="w-legal-man">'
														+'法定代表人：<span>侯仁龙</span>'								
														+'成立时间：<span>不足一年</span>	'							
													+'</div>'
													+'<div class="w-legal-man1">'
														+'注册资本：<span>1000万人民币</span>'
													+'</div>'							
												+'</div>'
												+'<div class="w-stale-box right">'
													+'<span>'+data.body[i].content+'</span>'	
												+'</div>'
											+'</div>';
								container.append(content);
								$(".spinner").hide();
					}
				}
			}
		}
	});
};
/*发送需求*/
function getSendXQ(id){
	var can=$("#sendXQ").serialize();
	console.log(can)
	$.ajax({
		type:"post",
		url:"https://120.27.236.240:8443/interface/options/Demand/addDemand",
		data:"userID="+username+"&enterpriseID="+id+"&"+can,
		dataType:"json",
		success:function(data){
			if(data.code=="SUCCESS"){
				alert("发送成功");
				window.location.reload();
			}else if(data.code=="110"){
				alert(data.message);
			}
		}
	});
};
/*我的订单*/
function payMoney(state){
	var container=$(".will-order-module");
	$.ajax({
		url:'https://120.27.236.240:8443/interface/order/getListByUserID',
		data:{userID:1111,status:state},
		type:'get',
		dataType:"json",
		success:function(data){
			if(data.body==0){
				container.html("暂无订单").addClass("zanwuguanzhu");
			}else{
				for(var i=0;i<data.body.length;i++){
					var content='<div class="order-single-module">'
									+'<div class="order-single-module-left">'
										+'<div class="oreder-title">'+data.body[i].productName+'</div>'
										+'<div class="order-number">订单编号:'+data.body[i].orderId+'</div>'
										+'<div class="order-time">日期'+format(data.body[i].createTime)	+'</div>'
									+'</div>'
									+'<div class="order-single-module-right">'
										+'<a href="#">立即支付</a>'
										+'<span>原价：<span>'+data.body[i].productPrice+'</span>元</span>'
										+'<span>订单金额：<span>'+data.body[i].total+'</span><span>元</span></span>'
										+'<span>数量：<span>'+data.body[i].productId+'</span></span>'
									+'</div>'
								+'</div>'
								container.append(content);
								$(".spinner").hide();
				}
			}
		}
	})
};
/*消息盒子*/
function inforBox(){
	var container=$(".news-content-text");
	if(!username){
		alert("请先登录");
		container.html("还未登录").addClass("zanwuguanzhu");
		return false;
	}
	$.ajax({
		url:'https://120.27.236.240:8443/interface/sys/messageBox/lookList',
		data:{userID:username},
		type:"get",
		success:function(data){
			if(data.body==0){
				container.html("暂无消息").addClass("zanwuguanzhu");
			}else{
				container.empty();
				for(var i=0;i<data.body.length;i++){
					var content='<div class="news">'
								+'<p>'+data.body[i].keyWord+'</p>'
								+'<p>'+data.body[i].content+'</p>'
								+'<p><span class="time">'+format(data.body[i].createTime,1)+'</span><span class="look" style="color: #2AC8A1;float:right;cursor: pointer;">查看详情</span></p>'
								+'<div class="wrong">'
									+'<img src="img/cha.png" onclick="closeInfor('+data.body[i].id+')"/>'
								+'</div>'
							+'</div>';
							container.append(content);
								$(".spinner").hide();
				}					
			}
		}
	})
}
function closeInfor(ID){
	$.ajax({
		url:'https://120.27.236.240:8443/interface/sys/messageBox/deleteByID',
		data:{userID:username,id:ID},
		type:'post',
		success:function(){
			inforBox();
		}
	})
}
