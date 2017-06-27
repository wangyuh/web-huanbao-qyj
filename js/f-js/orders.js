var textOrder = [".content_right_textOrder",".content_right_textOrder2"];
$(".content_right p button").click(function  () {
	for ($i = 0; $i < $(".content_right p button").length;$i++) {
		$(".content_right p button").eq($i).css({
			'background-color':"white",
			border:"1px solid lawngreen"
		})
		$(textOrder[$i]).hide()
	}
	$(this).css({
		'background-color':"lawngreen",
	     border:"1px solid black"
	})
	$(textOrder[$(this).index()]).show()
});
//收到需求
if (sessionStorage.userid) {
	
} else{
	sessionStorage.userid = "77666957";
}
//将时间戳转化为年月日
function add0(m){return m<10?'0'+m:m }
function format(timestamp)
{
  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况

	var time = new Date(timestamp);
	var year = time.getFullYear();
	var month = time.getMonth()+1;
	var date = time.getDate();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	return year+'-'+add0(month)+'-'+add0(date);
//	+' '+add0(hours)+':'+add0(minutes)+':'+add0(seconds)
}

//请求收到需求的数据
var userid = sessionStorage.userid;
$.ajax({
	type:"post",
	url:"https://120.27.236.240:8443/interface/options/Demand/getReceivedRequirement?enterpriseID="+userid,
	success:function  (data) {
		/*console.log(data);*/
		for ($i = 0 ; $i<data.body.length; $i++) {
			var demand = '<div class="order-single-module"><div class="order-single-module-left"><div class="oreder-title">'+data.body[$i].titile+'</div><div class="order-number">区域：'+data.body[$i].enterpriseName+'</div><div class="order-time">发布时间：'+format(data.body[$i].createTime)+'</div></div><div class="order-single-module-right2"><span>企业需求</span></div></div>';
			$(".demandss").append(demand);
		}
	}
});
//我的需求
myNeed("1")
function myNeed(n){
	$.ajax({
		type:"post",
		url:"https://120.27.236.240:8443/interface/options/Demand/getList/V2",
		data:{userID:1,pageSize:10,pageNum:n},
		success:function  (data) {
			$(".demandRe").empty();
			$('.w-pageNum').empty();
			for ($i = 0 ; $i<data.body.list.length; $i++) {
				var demand = '<div class="order-single-module"><div class="order-single-module-left"><div class="oreder-title">'+data.body.list[$i].titile+'</div><div class="order-number">区域：'+data.body.list[$i].enterpriseName+'</div><div class="order-time">发布时间：'+format(data.body.list[$i].createTime)+'</div></div><div class="order-single-module-right2"><span>个人需求</span></div></div>';
				$(".demandRe").append(demand);
			}
			if(data.body.navigatepageNums.length>=1){
				for(var i=0;i<data.body.navigatepageNums.length;i++){
					$('.w-pageNum').append('<li onclick="myNeed('+data.body.navigatepageNums[i]+')">'+data.body.navigatepageNums[i]+'</li>');
				}
				$(".w-pageNum li").eq(n-1).css({"color":"red"}); 
			}
		}
	});
}

//发需求

$(".demand-bt").click(function  () {
	$(".demand-send-wrap").show();
})
function demandHide (textName) {
	$(textName).click(function  () {
		
	$(".demand-send-wrap").hide();
	$(textName).css({
		cursor:' pointer'
	})
})
};
demandHide(".cuocuoc");
demandHide(".ccc");
demandHide(".fasong");

