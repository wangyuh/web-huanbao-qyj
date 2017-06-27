//获取跳转过来的A标签的id
function UrlSearch()
{
   var name,value; 
   var str=location.href; //取得整个地址栏
   var num=str.indexOf("?"); 
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
   for(var i=0;i < arr.length;i++){ 
    num=arr[i].indexOf("="); 
    if(num>0){ 
     name=arr[i].substring(0,num);
     value=arr[i].substr(num+1);
     this[name]=value;
     };
    }; 
}; 
var Request=new UrlSearch(); //实例化
console.log(Request.companyId);
var urlID = Request.companyId;
var urlmessage = '<ul><li><a href="company.html?companyId='+urlID+'">基本信息</a></li><li><a href="risk.html?companyId='+urlID+'">风险信息<span>0</span></a></li><li><a href="knowledge.html?companyId='+urlID+'">知识产权<span>0</span></a></li><li><a href="invest.html?companyId='+urlID+'">对外投资<span>0</span></a></li><li><a href="annals.html?companyId='+urlID+'">企业年报</a></li>	<li><a href="operate.html?companyId='+urlID+'">经营信息<span>0</span></a></li></ul>';
$(".c_r_message").append(urlmessage);

//选项卡字体移入移出变色
function changeBlue(textName) {
	$(textName).mouseenter(function() {
		if($(this).css('color') == 'rgb(255, 255, 255)') {

			$(this).css({
				color: 'white'
			});
		} else {
			$(this).css({
				color: '#blue'
			});
		};
	});
	$(textName).mouseleave(function() {
		if($(this).css('color') == 'rgb(255, 255, 255)') {
			$(this).css({
				color: 'white'
			});
		} else {
			$(this).css({
				color: '#333'
			});
		}
	});
}
//大选项卡点击事件
function clickBtn(texeName) {
	$(texeName).click(function() {
		for($i = 0; $i < $(texeName).length; $i++) {
			$(texeName).eq($i).css({
				color: '#333',
				'background-color': '#f2f3f5'
			});
		}
		$(this).css({
			color: 'white',
			'background-color': '#2ac8a1'
		});
	});
}
//选项卡标签的浮点
function optionsClick(textName1, arrName1) {
	$(textName1).click(function() {
		var scrllTopNum = 0;
		for($i = 0; $i < $(this).index(); $i++) {
			scrllTopNum += arrName1[$i];
		}
		scrllTopNum += ($(this).index() * 20 + 195);
		$("body,html").animate({
			scrollTop: scrllTopNum
		}, 500);
	});
	$(window).scroll(function() {
		//	console.log( " 滚动距离"+$(this).scrollTop());
		var scrootopNum = 140;
		for($i = 0; $i < arrName1.length; $i++) {

			scrootopNum += arrName1[$i];
			scrootopNum += 20;
			if($(this).scrollTop() >= scrootopNum) {
				for($j = 0; $j < arrName1.length; $j++) {
					$(textName1).eq($j).css({
						'background-color': '#f2f3f5',
						color: '#333'
					});
				}
				$(textName1).eq($i + 1).css({
					'background-color': '#2ac8a1',
					color: 'white'
				});

			} else if($(this).scrollTop() <= arrName1[0]){
				for($j = 0; $j < arrName1.length; $j++) {
					$(textName1).eq($j).css({
						'background-color': '#f2f3f5',
						color: '#333'
					});
				}
				$(textName1).eq(0).css({
					'background-color': '#2ac8a1',
					color: 'white'
				});
			}
			
		}
	});
};
//风险信息选项卡
clickBtn('.risk ul li');
changeBlue('.risk ul li');

//选项卡标签的浮点
var arrscrTops = [];
for($i = 0; $i <= $(".scrrtop1").length; $i++) {
	var arrscrTop = $(".scrrtop1").eq($i).height();
	arrscrTops.push(arrscrTop);
}
optionsClick('.risk>ul>li', arrscrTops);
//右边选项卡的吸顶效果
//function tabCeiling(className) {
//	$(window).scroll(function() {
//		var inde = $(this).scrollTop();
//		var inde2 = $(this).scrollTop();
//		//		console.log("滚动距离="+$(this).scrollTop())
//		if($(this).scrollTop() >= 180) {
//
//			$(".c_r_message").css({
//				top: 60 + "px"
//
//			});
//			$(className).css({
//				top: 136 + "px"
//			});
//		} else if($(this).scrollTop() <= 180) {
//			$(".c_r_message").css({
//				top: (245 - inde) + "px"
//
//			});
//			$(className).css({
//				top: (320 - inde2) + "px"
//			});
//
//		} else if($(this).scrollTop() <= 0) {
//			$(".c_r_message").css({
//				top: "245px"
//
//			});
//			$(className).css({
//				top: '320px'
//			});
//		}
//	});
//};
//风险信息
//tabCeiling(".riskUl");
//知识产权
//tabCeiling(".knowledgeTab");
//企业年报
//tabCeiling(".annals>ul")
//tabCeiling(".operate>ul")

//知识产权
clickBtn('.knowledge ul li');
changeBlue('.knowledge ul li');
var knowScrTops = [];
for($i = 0; $i <= $(".detail-konwledge-brand").length; $i++) {
	var arrscrTop = $(".detail-konwledge-brand").eq($i).height();
	knowScrTops.push(arrscrTop);
}
optionsClick('.knowledge ul li', knowScrTops)

//企业年报选项卡
clickBtn('.annals ul li');
changeBlue('.annals ul li');

//经营信息
clickBtn('.operate ul li');
changeBlue('.operate ul li');
var operateScrTops = [];
for($i = 0; $i <= $(".operate > .detail-konwledge-brand").length; $i++) {
	var arrscrTop = $(".operate > .detail-konwledge-brand").eq($i).height();
	operateScrTops.push(arrscrTop);
};
//回到顶部
  function scroll(scrollTo, time) { //方法封装
    var scrollFrom = parseInt(document.body.scrollTop),
      i = 0,
      runEvery = 5; // run every 5ms

    scrollTo = parseInt(scrollTo);
    time /= runEvery;

    var interval = setInterval(function() {
      i++;

      document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;

      if(i >= time) {
        clearInterval(interval);
      }
    }, runEvery);
  }
  
  $('.go-top').click(function() {
    scroll('0', 500);
  });
optionsClick('.operate ul li', operateScrTops)
//判断搜索界面传过来的公司
if(sessionStorage.enterpriseName) {

} else {
	sessionStorage.enterpriseName = "小米科技有限责任公司";
};
var urlDate = sessionStorage.enterpriseName;
//判断搜索界面传过来的公司
var urlDateId;
if(Request.companyId) {
    urlDateId = Request.companyId;
} else {
	urlDateId = 67958539;
};
if(sessionStorage.enterpriseId) {

} else {
	sessionStorage.enterpriseId = 67958539;
};
var urlDateenterpriseId= sessionStorage.enterpriseId;
//将时间戳转化为日期
function add0(m) {
	return m < 10 ? '0' + m : m
}

function format(timestamp, bol) {
	//timestamp是整数，否则要parseInt转换,不会出现少个0的情况

	var time = new Date(timestamp);
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var date = time.getDate();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	if(bol) {
		return year + '-' + add0(month) + '-' + add0(date) + ' ' + add0(hours) + ':' + add0(minutes) + ':' + add0(seconds);

	} else {
		return year + '-' + add0(month) + '-' + add0(date);
		//	+' '+add0(hours)+':'+add0(minutes)+':'+add0(seconds)
	}

}
//ajax请求方式封装
function ajaxRequest(url,successFun) {
	$.ajax({
		type: "post",
		url: url,
		async: true,
		data: "method=testAjaxPost&name=中文",
		success: function(data) {
			successFun(data);	
		}
	});
}
function TextName (Text) {
	if (Text == null) {
		Text = "--";
	}else if(Text == undefined){
		Text = "--";		
	}else if(Text == ''){
		Text = "--";		
	}else{
		Text = Text;
	}
	return Text;
}
//基本信息左上
function conmpayCLT(data) {
	console.log(data);
	$(".c_l_top ul li").eq(0).html(TextName(data.body.enterprisenamech));
	//		$(".span1").html(data.body[0].operatingstate);
	var ul = '<ul><li>' + TextName(data.body.enterprisenamech) + '</li><li class="gray">状态：<span class="span1">' + TextName(data.body.operatingstate) + '</span></li><li class="gray">官网 : <a class="hrf" href="###">'+TextName(data.body.url)+'</a></li><li class="gray"><span class="spandizhi">地址：</span><p>' + TextName(data.body.enterpriseaddress) + '<a class="lookmap" href="###">查看地图</a></p></li><li><a href="###"><img src="img/f-img/浏览.png" alt="" />浏览（<span class="span3">0</span>）</a><a href="###"><img src="img/f-img/评论.png" alt="" />评论（<span class="span4">0</span>）</a></li></ul>'
	$('.c_l_top').append(ul);
	
	$(".c_r_top ul li p").html(TextName(data.body.enterprisenamech));
	$(".c_r_top .span7").html("更新日期：" + TextName(format(data.body.updatetime)));
	fbcCount();
	$(".lookmap").attr('href',"Map.html?name="+data.body.enterpriseaddress);
}

var url1 = "https://120.27.236.240:8443/interface/enterprise/enterpriseinfo/getEnterpriseDetailByID?id="+urlDateId;
ajaxRequest(url1, conmpayCLT);
$(function() {
	$('.common-footer').load('commonFooter.html');
});
//关注,评论,浏览次数
function fbcCount () {
	function conmpayCount(data) {
	var count = ''
	$(".span3").html(data.body.browseCount);
	$(".span4").html(data.body.commentCount);
	$('.c_l_top ul').append(count);
	$(".followCount").html(data.body.followCount);
}

var urlCount = "https://120.27.236.240:8443/interface/options/Manager/getThreeCounts?enterpriseId="+urlDateId;
ajaxRequest(urlCount, conmpayCount);


}
