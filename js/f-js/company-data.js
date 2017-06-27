$(function() {
	//基本信息列表
	var url3 = "https://120.27.236.240:8443/interface/enterprise/enterpriseinfo/getEnterpriseDetailByID?id=" + urlDateId;
	ajaxRequest(url3, conmpayJB);

	function conmpayJB(data) {
		var jiben = '<table  class="w-jiben-table"><tbody><tr><td class="w-tb-bg" style="width: 140px;">统一社会行用代码</td>	<td style="width: 280px;">' + TextName(data.body.creditno) + '</td><td class="w-tb-bg" style="width: 140px;">组织机构代码</td><td style="width: 280px;">' + TextName(data.body.organizationalinstitutionno) + '</td></tr><tr><td class="w-tb-bg">注册号</td><td>' + TextName(data.body.registrationno) + '</td><td class="w-tb-bg">经营状态</td><td>' + TextName(data.body.operatingstate) + '</td></tr><tr><td class="w-tb-bg">公司类型</td>	<td>' + TextName(data.body.enterprisetype) + '</td>' +
			'<td class="w-tb-bg">成立日期</td>	<td>' + TextName(data.body.establishmentdate) + '</td></tr><tr><td class="w-tb-bg">法定代表人</td><td><a href="#">' + TextName(data.body.legalperson) + '</a><div class="w-out-icon"><span><img src="img/f-img/feren.png"/></span>	<a href="#">法人对外投资</a></div></td><td class="w-tb-bg">营业期限</td><td>' + TextName(data.body.termstartdate) + ' ~ ' + TextName(data.body.termenddate) + '</td></tr><tr><td class="w-tb-bg">注册资本</td><td>' + TextName(data.body.registeredcapital) + '万' + TextName(data.body.currency) + '</td><td class="w-tb-bg">发照日期</td>	<td>' + TextName(data.body.approveddate) + '</td></tr><tr><td class="w-tb-bg">登记机关：</td><td colspan="3">' + TextName(data.body.registrationauthority) + '</td>' +
			'</tr><tr><td class="w-tb-bg">企业地址：</td><td colspan="3">' + TextName(data.body.enterpriseaddress) + '</td></tr><tr><td class="w-tb-bg">经营范围：</td><td colspan="3">' + TextName(data.body.businessscope) + '</td></tr></tbody></table>';
		$(".comp").prepend(jiben);
	}
	//股东信息
	var url4 = "https://120.27.236.240:8443/interface/enterprise/Shareholder/getShareHoderList?enterpriseId=" + urlDateId;
	ajaxRequest(url4, conmpayGD);

	function conmpayGD(data) {
		if(data.body) {
			for($i = 0; $i < data.body.holderList.length; $i++) {
				var gudong = '<tr><td>' + TextName(data.body.holderList[$i].shareholderType) + '</td><td><a href="#">' + TextName(data.body.holderList[$i].shareholder) + '</a></td><td>' + TextName(data.body.holderList[$i].contribution) + ' ' + TextName(data.body.holderList[$i].unit) + '</td><td>' + TextName(data.body.holderList[$i].realAmount) + ' ' + TextName(data.body.holderList[$i].unit) + '</td></tr>';
				$(".compgud").append(gudong);
			}
		} else {
			var gudong = '<tr><td>--</td><td><a href="#">--</a></td><td>--</td><td>--</td></tr>';
			$(".compgud").append(gudong);
		}

	}

	//基本详情页-主要成员
	var url5 = "https://120.27.236.240:8443/interface/enterprise/Member/getListByID?enterpriseId=" + urlDateId;
	ajaxRequest(url5, conmpayRY);

	function conmpayRY(data) {
		if(data.body == '' || data.body == undefined) {
			var chengyuan = '<tr><td class="w-tb-bg" style="width: 160px;">--</td><td style="width: 260px;"><a href="#">--</a><div class="w-out-icon-border"><span><img src="img/f-img/zhuyaochengyuan.png"/></span><a href="#">法人对外投资</a></div></td><td class="w-tb-bg" style="width: 160px;">--</td><td style="width: 260px;"><a href="#">--</a><div class="w-out-icon-border"><span><img src="img/f-img/zhuyaochengyuan.png"/></span><a href="#">法人对外投资</a></div></td></tr>';
			$(".compcy").append(chengyuan);
		} else {

			for($i = 0; $i < data.body.length; $i += 2) {
				var chengyuan = '<tr><td class="w-tb-bg" style="width: 160px;">' + TextName(data.body[$i].post) + '</td><td style="width: 260px;"><a href="#">' + TextName(data.body[$i].membername) + '</a><div class="w-out-icon-border"><span><img src="img/f-img/zhuyaochengyuan.png"/></span><a href="#">法人对外投资</a></div></td><td class="w-tb-bg" style="width: 160px;">' + TextName(data.body[$i + 1].post) + '</td><td style="width: 260px;"><a href="#">' + TextName(data.body[$i + 1].membername) + '</a><div class="w-out-icon-border"><span><img src="img/f-img/zhuyaochengyuan.png"/></span><a href="#">法人对外投资</a></div></td></tr>';
				$(".compcy").append(chengyuan);
			}
		}
	}
	//基本详情页-分支机构
	var urlfenzhi = "https://120.27.236.240:8443/interface/enterprise/Branch/getListByID?enterpriseId=" + urlDateId;
	ajaxRequest(urlfenzhi, conmpayFZ);

	function conmpayFZ(data) {
		//	for ($i = 0 ;$i< data.body.length;$i++) {
		var fenzhi = '<tr><td><a href="#">' + TextName(data.body.enterpriseName) + '</a></td><td><a href="#">' + TextName(data.body.legalPerson) + '</a></td><td>' + TextName(data.body.registerCapital) + '</td><td>' + TextName(data.body.establishTime) + '</td></tr>';
		$(".compyfenzhi").append(fenzhi);
		//	}

	}
	//企业评价
	var url2 = "https://120.27.236.240:8443/interface/options/Comment/getListByEnterPriseId?enterpriseId=" + urlDateId;
	ajaxRequest(url2, conmpayAppr);

	function conmpayAppr(data) {
		for($i = 0; $i < data.body.length; $i++) {
			var pingjia = '<div class="w-fabiao-after-box"><div class="w-author--prcture-mx"></div><div class="w-fabiao-after-right"><div>' + TextName(data.body[$i].shortName) + '</div><div class="w-fabiao-date"><div class="w-fabiao-time"><span>' + format(data.body[$i].createTime, 1) + '</span><span class="w-zapian-class w-input-artive">' + TextName(data.body[$i].content) + '</span></div></div><div class="w-fabiao-text">' + TextName(data.body[$i].contentFlag) + '</div></div></div>';
			$(".comp").append(pingjia);
		}

	}
	//发表企业评价基本信息
	var userId = 1;
	var urlUser = "https://120.27.236.240:8443/interface/user/getUserInfo?userID=" + userId;
	ajaxRequest(urlUser, conmpayUser);

	function conmpayUser(data) {
		var appenImg = '<img src="https://120.27.236.240:8443/' + data.body.photo + '">';
		$(".w-author--prcture-sm").append(appenImg);

		$(".w-author-name").html(TextName(data.body.shortName));
		$(".w-babiao-btn").click(function() {
			var urlfs = 'https://120.27.236.240:8443/interface/options/Comment/add?enterpriseId=' + urlDateId + '&userID=1'
			var fabiaoText = $(".fabiao").val();
//			获取企业标签评论的内容
			var clickText;
			for($i = 0; $i <= $('.w-Input-btn span').length; $i++) {
				if($(".w-Input-btn span").eq($i).css("border-color") != 'rgb(247, 73, 39)') {
					clickText += $(".w-Input-btn span").eq($i).html() + "/";
				}
			}
			$.ajax({
				type: "post",
				url: url,
				async: true,
				data: {
					content: fabiaoText,
					contentFlag: clickText
				},
				success: function(data) {

				}

			})
		})
	}

	//企业印象的点击事件
	$(".w-Input-btn span").click(function() {
		var color = $(this).css("border-color");
		if(color == 'rgb(247, 73, 39)') {
			$(this).css({
				'border-color': '#E3EfEd !imporant',
				color: '#AECCC7 !imporant',
				background: '#fafafa !imporant'
			});
		} else {
			$(this).css({
				'border-color': '#f74927 !imporant',
				color: '#f74927 !imporant',
				background: '#ffefef !imporant'
			});
		};
	});

	function RViewed(data) {
		console.log(data);
		//	浏览的本地缓存
		var RVadress = data.body.enterprisenamech;
		var RVdate = Date.parse(new Date());
		var RVId = data.body.id;
		var RVContent = RVadress + "|" + RVdate + "|" + RVId;
		if(localStorage.RecentlyViewedNum) {
			var nums = localStorage.RecentlyViewedNum;
			for(var i = 1; i <= nums; i++) {
				var RVtextNum = 'RecentlyViewed' + i;
				if(localStorage.getItem(RVtextNum)) {
					var RVtexts = localStorage.getItem(RVtextNum).split("|");
					if(RVtexts[0] == RVadress) {
						localStorage.removeItem(RVtextNum);
					}
				}

			}
			localStorage.RecentlyViewedNum++;
			var num = localStorage.RecentlyViewedNum;
			localStorage.setItem('RecentlyViewed' + num, RVContent);

		} else {
			localStorage.RecentlyViewedNum = 1;

			localStorage.setItem('RecentlyViewed1', RVContent);
		}
		// localStorage.clear();
	}
	var urlRViewed = "https://120.27.236.240:8443/interface/enterprise/enterpriseinfo/getEnterpriseDetailByID?id=" + urlDateId;
	ajaxRequest(urlRViewed, RViewed);
});