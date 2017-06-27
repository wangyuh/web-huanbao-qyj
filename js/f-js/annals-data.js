$(window).load(function(){  
//	企业年报
	var arry = [".year2015", ".year2014", ".year2013"];
	function annalsZichan(data) {
		if (data.body == '' || data.body == undefined) {
			for($i = 0; $i < arry.length; $i++) {
			var detailkonwledgebrand = '<div class="detail-konwledge-brand-content"><table class="table table-bordered company-property-table"><tr><th style="width: 200px;">资产总额</th><th style="width: 200px;">--</th><th style="width: 200px;">所有者权益合计</th>	<th style="width: 220px;">--</th></tr><tr><td>营业总收入</td><td>--</td><td>利润总额</td><td>--</td></tr><tr><td>营业总收入中主营业务收入</td><td>--</td><td>净利润</td><td>--</td></tr><tr><td>纳税总额</td><td>--</td>	<td>负债总额</td><td>--</td></tr></table></div></div>';
			$(arry[$i]).append(detailkonwledgebrand);
			var annalsBrandContent = '<div class="detail-konwledge-brand-content"><table class="table table-bordered main-message-table"><tr><th style="width: 180px;"><p>注册号/</p>统一社会信用代码：</th><th style="width: 240px;height: 50px;line-height: 50px;">--</th><th style="width: 180px;height: 50px;line-height: 50px;">企业名称</th>	<th style="width: 240px;height: 50px;line-height: 50px;">--</th></tr><tr><td>企业联系电话：</td><td>--</td><td>邮政编码：</td><td>--</td></tr><tr><td>企业通信地址：</td><td colspan="3">--</td></tr><tr><td>电子邮箱：</td><td>--</td><td>是否有网店或着网站</td><td>--</td></tr><tr><td style="height: 50px;line-height: 50px;">行业人数</td><td style="height: 50px;line-height: 50px;">企业选择不公示</td><td><p>有限责任公司本年度是否</p>发生股东股权转让</td><td style="height: 50px;line-height: 50px;">--</td></tr>	<tr><td><p>企业是否有投资信息或购</p>买其他公司股权：</td><td style="height: 50px;line-height: 50px;">--</td><td style="height: 50px;line-height: 50px;">从业人数：</td><td style="height: 50px;line-height: 50px;">企业选择不公示</td></tr></table></div>';
		    $(arry[$i]).find('.divAnnals').after(annalsBrandContent);
		}
		} else{
			for($i = 0; $i < arry.length; $i++) {
			var detailkonwledgebrand = '<div class="detail-konwledge-brand-content"><table class="table table-bordered company-property-table"><tr><th style="width: 200px;">资产总额</th><th style="width: 200px;">' + TextName(data.body[$i].assets) + '</th><th style="width: 200px;">所有者权益合计</th>	<th style="width: 220px;">' + TextName(data.body[$i].totalOwnersEquity) + '</th></tr><tr><td>营业总收入</td><td>' + TextName(data.body[$i].income) + '</td><td>利润总额</td><td>' + TextName(data.body[$i].profit) + '</td></tr><tr><td>营业总收入中主营业务收入</td><td>' + TextName(data.body[$i].mainBusinessIncome) + '</td><td>净利润</td><td>' + TextName(data.body[$i].netProfit) + '</td></tr><tr><td>纳税总额</td><td>' + TextName(data.body[$i].taxAmount) + '</td>	<td>负债总额</td><td>' + TextName(data.body[$i].liabilities) + '</td></tr></table></div></div>';
			$(arry[$i]).append(detailkonwledgebrand);
			var annalsBrandContent = '<div class="detail-konwledge-brand-content"><table class="table table-bordered main-message-table"><tr><th style="width: 180px;"><p>注册号/</p>统一社会信用代码：</th><th style="width: 240px;height: 50px;line-height: 50px;">--</th><th style="width: 180px;height: 50px;line-height: 50px;">企业名称</th>	<th style="width: 240px;height: 50px;line-height: 50px;">'+TextName(data.body[$i].enterpriseName)+'</th></tr><tr><td>企业联系电话：</td><td>'+TextName(data.body[$i].tel)+'</td><td>邮政编码：</td><td>--</td></tr><tr><td>企业通信地址：</td><td colspan="3">'+TextName(data.body[$i].addr)+'</td></tr><tr><td>电子邮箱：</td><td>'+TextName(data.body[$i].email)+'</td><td>是否有网店或着网站</td><td>'+TextName(data.body[$i].hasOnlineStore)+'</td></tr><tr><td style="height: 50px;line-height: 50px;">行业人数</td><td style="height: 50px;line-height: 50px;">企业选择不公示</td><td><p>有限责任公司本年度是否</p>发生股东股权转让</td><td style="height: 50px;line-height: 50px;">'+TextName(data.body[$i].hasAssignment)+'</td></tr>	<tr><td><p>企业是否有投资信息或购</p>买其他公司股权：</td><td style="height: 50px;line-height: 50px;">'+TextName(data.body[$i].hasInvestment)+'</td><td style="height: 50px;line-height: 50px;">从业人数：</td><td style="height: 50px;line-height: 50px;">企业选择不公示</td></tr></table></div>';
		    $(arry[$i]).find('.divAnnals').after(annalsBrandContent);
		}
		}
		
	}
	var url1 = "https://120.27.236.240:8443/interface/enterprise/AnnualReport/getListByName?enterpriseName="+urlDateId;
	ajaxRequest(url1, annalsZichan);
	$(".annals>ul>li").click(function() {
		for($i = 0; $i < arry.length; $i++) {
			$(arry[$i]).hide();
		}
		$(arry[$(this).index()]).show();
	});
//	网站或网店信息
    var urlwangzhan = "https://120.27.236.240:8443/interface/enterprise/AnnualReport/getListByName?enterpriseName="+urlDateId;
	ajaxRequest(urlwangzhan,annalwangzhan);
	function annalwangzhan (data) {
		if (data.body == '' || data.body == undefined) {
			var wangzhan = '<tr><td>--</td><td>--</td><td>--</td></tr>';
			$(".wangzhan").append(wangzhan);
		} else{
			var wangzhan = '<tr><td>网站</td><td>'+TextName(data.body.url)+'</td><td>'+TextName(data.body.enterpriseName)+'</td></tr>';
			$(".wangzhan").append(wangzhan);
		}
		
	}

//年报股东,发起人及出资
	function annalschuzi(data) {
		var chuzi = '<tr><td>'+TextName(data.body.shareholder)+'</td><td>'+TextName(data.body.realAmount) +' '+ TextName(data.body.unit)+'</td><td>'+ TextName(data.body.sharestime) +'</td><td>货币</td><td>'+TextName(data.body.realAmount)+' ' + TextName(data.body.unit)+'</td><td>'+TextName(data.body.sharestime)+'</td><td>货币</td></tr>';
		$(".annchuzi").append(chuzi);
	}
	var urlann = "https://120.27.236.240:8443/interface/enterprise/Shareholder/getDetailByID?id="+urlDateId;
	ajaxRequest(urlann, annalschuzi);
//风险信息
var url2 = "https://120.27.236.240:8443/interface/management/Abnormal/getDetail?id="+urlDateId;
ajaxRequest(url2, riskAbnormal);
function riskAbnormal (data) {
	if (data.body == '' || data.body == undefined) {
		var abnormal = '<tr><td>--</td><td>--</td><td>--</td><td>--</td></tr>';
	    $(".riskAbnormal").append(abnormal);
	} else{		
	    var abnormal = '<tr><td>1</td><td>'+TextName(data.body.listDate)+'</td><td>'+TextName(data.body.unit)+'</td><td>'+TextName(data.body.includeReason)+'</td></tr>';
	    $(".riskAbnormal").append(abnormal);
	}

}
//行政处罚
var url3 = "https://120.27.236.240:8443/env/interface/punishment/getDetailById?id="+urlDateId;
ajaxRequest(url3,riskPunish);
function riskPunish (data) {
	if (data.body == '' || data.bdoy == undefined) {
		
	} else{
		$('.w-thead').next().remove();
	    var abnormal = '<tr><td>'+1+'</td><td>'+data.body.punishmentType+'</td><td>'+data.body.content+'<a href="### ">详情>></a></td></tr>';
	    $(".riskPunish").append(abnormal);
	    $(".punishNum").html("(1)");
	   
	}
	
}
//风险信息-工商变更
var urlGS = 'https://120.27.236.240:8443/interface/enterprise/Change/getListByID?enterpriseId='+urlDateId;
ajaxRequest(urlGS,riskGS);
function riskGS (data) {
	if (data.body == '' || data.body == undefined) {
		var abnormal = '<tr><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>';
	       $('.riskGS').append(abnormal);
	} else{
		for ($i = 0; $i <= (Number(data.body.length)-1); $i++) {
		   var abnormal = '<tr><td>'+($i+1)+'</td><td>'+TextName(data.body[$i].changetime)+'</td><td>'+TextName(data.body[$i].changeitem)+'</td><td>'+TextName(data.body[$i].changebefore)+'</td><td>'+TextName(data.body[$i].changeafter)+'</td></tr>';
	       $('.riskGS').append(abnormal);
	   
	 }
	   $(".num1").html("("+data.body.length+")");
	   $(".riskUl li").eq(0).find("span").html(data.body.length);
	   var crmessagenum =  Number($(".c_r_message li").eq(1).find("span").html());
	   $(".c_r_message li").eq(1).find("span").html(crmessagenum+Number(data.body.length));
	   debugger;
	}
	

}
//风险信息-股权出质
var urlGQCZ = 'https://120.27.236.240:8443/interface/management/EquityPledged/getListByEnterpriseID?enterpriseId='+urlDateId;
ajaxRequest(urlGQCZ,riskGQCZ);
function riskGQCZ (data) {
	if (data.body == '' || data.body == undefined) {
		var riskGQCZ = '<tr><td>--</td><td>--</td><td>--</td><td>--</td><td>--万元</td><td>--</td></tr>';
	    $(".riskGQCZ").append(riskGQCZ);
	} else{
		$(".num2").html("("+data.body.length+")");
	    $(".riskUl li").eq(7).find("span").html(data.body.length);
	    var crmessagenum =  Number($(".c_r_message li").eq(1).find("span").html());
	    $(".c_r_message li").eq(1).find("span").html(crmessagenum+Number(data.body.length));
	    for ($i = 0; $i<=data.body.length;$i++) {
		    var riskGQCZ = '<tr><td>'+($i+1)+'</td><td>'+TextName(data.body[$i].registrationNumber) +'</td><td>'+TextName(data.body[$i].mortgagor) +'</td><td>'+TextName(data.body[$i].mortgagee) +'</td><td>'+TextName(data.body[$i].amount)+'万元</td><td>'+TextName(data.body[$i].state) +'</td></tr>';
	        $(".riskGQCZ").append(riskGQCZ);
	   
	   
	   }
	}
	

}
//风险信息-动产抵押
var urlDCDY = 'https://120.27.236.240:8443/interface/management/Mortgage/getListByEnterpriseID?enterpriseId='+urlDateId;
ajaxRequest(urlDCDY,riskDCDY);
function riskDCDY (data) {
	if (data.body == '' || data.body == undefined) {
		var riskDCDY = '<tr><td>--</td><td>--</td><td>--</td><td>--</td></tr>';
	    $(".riskDCDY").append(riskDCDY);
	} else{
		$('.numD').html("("+data.body.length+")");
	    $(".riskUl li").eq(8).find("span").html(data.body.length);
	    var crmessagenum =  Number($(".c_r_message li").eq(1).find("span").html());
	    $(".c_r_message li").eq(1).find("span").html(crmessagenum+data.body.length);
	 for ($i = 0; $i<=(Number(data.body.length)-1);$i++) {
		var riskDCDY = '<tr><td>'+($i+1)+'</td><td>'+TextName(data.body[$i].enterpriseID)+'</td><td>'+TextName(data.body[$i].guarantee)+'</td><td>'+TextName(data.body[$i].num) +'</td></tr>';
	    $(".riskDCDY").append(riskDCDY);
	 
	}
	
	   
	}

}
//风险信息-行政处罚
var urlXZCF = 'https://120.27.236.240:8443/env/interface/punishment/getDetailById?id='+urlDateId;
ajaxRequest(urlXZCF,riskXZCF);
function riskXZCF (data) {

	console.log(data.body)
//	var crmessagenum =  Number($(".c_r_message li").eq(1).find("span").html()) + num;
//	$(".c_r_message li").eq(1).find("span").html(crmessagenum);
	for ($i = 0; $i<=data.body.length;$i++) {
		var riskXZCF = '<td>'+$i+'</td><td>'+TextName(data.body[$i].punishmentType)+'</td><td>'+data.body[$i].content+'<a href="### ">详情>></a></td>';
	    $(".riskXZCF").append(riskXZCF);
	   
	}
}


});
