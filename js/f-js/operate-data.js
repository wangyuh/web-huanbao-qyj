$(function() {
		//招投标
		var url2 = "https://120.27.236.240:8443/interface/tender/TenderBaseinfo/getDetailByID?id="+urlDateId;
		ajaxRequest(url2, operateZB);

		function operateZB(data) {
			var zhaobiao = '<tr><td>' + 1 + '</td><td>' + TextName(data.body.content) + '</td><td>' + TextName(data.body.publishTime) + '</td><td>' + TextName(data.body.region) + '</td><td>中标结果公告</td></tr>';
			$(".detail-bids").append(zhaobiao);
			$(".operateBids").html("(1)")
			$(".operate ul li").eq(2).find('span').html(1);
			var num = Number($(".c_r_message li").eq(5).find('span').html());
			$(".c_r_message li").eq(5).find('span').html(num + 1);

		};

		//招聘
		var url3 = "https://120.27.236.240:8443/interface/job/searchJobDetail?id="+urlDateId;
		ajaxRequest(url3, operateZP);

		function operateZP(data) {
			//	for ($i = 0;$i<data.body.length;$i++) {
			
				var zhaopin = '<tr><td>1</td><td>' + TextName(data.body.position) + '</td><td>' + TextName(data.body.salary) + '</td><td>1-3年</td><td>' + TextName(data.body.place) + '</td><td>' + TextName(data.body.degree) + '</td><td>' + TextName(data.body.releaseTime) + '</td></tr>';
			    $(".zhaopin").append(zhaopin);
			  
			    $(".operateZP").html("(" + 1 + ")");
			    $(".operate ul li").eq(1).find('span').html(1);
			    var num = Number($(".c_r_message li").eq(5).find('span').html());
			    $(".c_r_message li").eq(5).find('span').html(num + 1);
			
			

		};
		//对外投资数据
		var url4 = "https://120.27.236.240:8443/v2/investment/getInvestmentAbroadListByEnterpriseName?enterpriseName=" + urlDate;
		ajaxRequest(url4, investTZ);

		function investTZ(data) {
			$(".c_r_message li").eq(3).find('span').html(data.body.length);
			for($i = 0; $i < data.body.length; $i++) {
				var touzhi = '<div class="w-conpany-infor-box"><div class="w-conpany-prc left" style="background: url(img/w-img/U0ZFM2PIX_]US2%8$GZ4LAP.png);"></div><div class="w-infor-right-box"><div class="w-conpany-name"><a href="javascript:;">' + TextName(data.body[$i].enterprisenamech) + '</a>	<span>' + TextName(data.body[$i].operatingstate) + '</span></div><div class="w-legal-man">法定代表人：<span>' + TextName(data.body[$i].legalperson) + '</span> 注册资本：	<span>' + TextName(data.body[$i].registeredcapital) + '万人民币</span> 成立时间：<span>' + TextName(data.body[$i].establishmentdate) + '</span></div><div class="w-industry">' + TextName(data.body[$i].brief) + '</div></div></div>';
				$(".touzi").append(touzhi);
			}
			$(".investDui").html(data.body.length);

		};
		//知识产权-著作权
		var url5 = "https://120.27.236.240:8443/interface/qualifications/Copyright/getDetail?id=57314";
		ajaxRequest(url5, knowZZ);

		function knowZZ(data) {
			$('.knowZuzuoNum').html("(1)");
			var num = Number($(".c_r_message li").eq(2).find('span').html());
			$(".c_r_message li").eq(2).find('span').html(num + 1);
			$('.knowledgeTab li').eq(2).find('span').html(1);
			//	for ($i = 0;$i<data.body.length;$i++) {
			var zuozu = '<tr><td>1</td><td>' + TextName(data.body.copyrightName) + '</td><td>' + TextName(data.body.registrationNo) + '</td><td>' + TextName(data.body.registrationType) + '</td><td>' + TextName(format(data.body.createTime)) + '</td><td>' + TextName(data.body.registrationDate) + '</td><td>' + TextName(data.body.applicationDate) + '</td></tr>';
			$(".zuzuo").append(zuozu);
			//	}

		};
		//知识产权的专利信息
		var url6 = "https://120.27.236.240:8443/interface/qualifications/Patent/getDetail?id=57314";
		ajaxRequest(url6, knowZl);

		function knowZl(data) {
			$('.knowledgeTab li').eq(1).find('span').html(1);
			var num = Number($(".c_r_message li").eq(2).find('span').html());
			$(".c_r_message li").eq(2).find('span').html(num + 1);
			//	for ($i = 0;$i<data.body.length;$i++) {
			var zhuanli = '<div class="detail-konwledge-brand-content1 detail-konwledge-brand1"><div class="trademark_left_text1"><p>' + TextName(data.body.title) + '</p><p>分类：<span>' + TextName(data.body.applicationNo) + '</span>主分类号：<span>' + TextName(data.body.applicationNo) + '</span></p><p>申请日期：<span>' + TextName(data.body.applicationDate) + '</span></p></div></div>';
			$(".knowzhuanli").append(zhuanli);
			//	}
			$(".knowleZl").html("(" + 1 + ")")
		};
		//	知识产权-软件著作权
		var url7 = "https://120.27.236.240:8443/interface/qualifications/Softwarecopyright/getDetail?id=57314";
		ajaxRequest(url7, knowRZZ);

		function knowRZZ(data) {
			$(".knowRJNum").html('(1)');
			$('.knowledgeTab li').eq(3).find('span').html(1);
			var num = Number($(".c_r_message li").eq(2).find('span').html());
			$(".c_r_message li").eq(2).find('span').html(num + 1);
			//	for ($i = 0;$i<data.body.length;$i++) {
			var knowRZZ = '<tr><td>1</td><td>' + TextName(data.body.fullName) + '</td><td>' + TextName(data.body.registrationNo) + '</td><td>' + TextName(data.body.version) + '</td><td>' + TextName(data.body.classificationNo) + '</td><td>' + TextName(data.body.registrationDate) + '</td><td>' + TextName(data.body.shortName) + '</td></tr>';
			$(".knowRZZ").append(knowRZZ);
			//	}

		};
		//			知识产权-资质认证
		var url8 = "https://120.27.236.240:8443/interface/qualifications/Professional/getDetail?id=85024868";
		ajaxRequest(url8, knowYM8);

		function knowYM8(data) {
			console.log(data);
			$(".f-konwledge").html("(" + data.body.length + ")");
			$('.knowledgeTab li').eq(5).find('span').html(data.body.length);
			var num = Number($(".c_r_message li").eq(2).find('span').html());
			$(".c_r_message li").eq(2).find('span').html(num + data.body.length);
			$(".zhiziRemove").remove();
			for($i = 0; $i < data.body.length; $i++) {
				var knowYM = '<tr><td>1</td><td>' + data.body[$i].url + '</td><td>' + data.body[$i].urlName + '</td><td>' + data.body[$i].registrationNo + '</td><td>' + data.body[$i].registrationDate + '</td></tr>';
				$(".knowYM").append(knowYM);
			}
		};
		//知识产权-商标

		function Image(img) {
			if(img == null) {
				return 'img/f-img/default.png';
			} else {
				return 'https://120.27.236.240:8443/' + img;
			}
		}
		var urlLogo = "https://120.27.236.240:8443/interface/qualifications/Trademark/getListByEnterpriseID?enterpriseId=" + urlDateId + "&pageSize=6&pageNum=1";
		ajaxRequest(urlLogo, knowLogo);

		function knowLogo(data) {
			console.log(data);
			if(data != '' && (data.body.list != 0)) {
				$(".knowSBnum").html("(" + data.body.list.length + ")");
				$('.knowledgeTab li').eq(0).find('span').html(data.body.list.length);
				var num = Number($(".c_r_message li").eq(2).find('span').html());
				$(".c_r_message li").eq(2).find('span').html(num + data.body.list.length);
				for($i = 0; $i < data.body.list.length; $i += 2) {
					var knowLogo = '<div class="detail-konwledge-brand-content1 detail-konwledge-brand1"><!--商标logo--><div class="trademark_left_logo"><img src="' + Image(data.body.list[$i].trademarkImage) + '" /></div><div class="trademark_left_text"><p>' + TextName(data.body.list[$i].enterpriseName) + '</p><p>分类：<span>' + TextName(data.body.list[$i].typeName) + '</span></p><p>状态：<span>' + TextName(data.body.list[$i].state) + '</span></p></div></div><div class="detail-konwledge-brand-content1 detail-konwledge-brand2"><!--商标logo--><div class="trademark_left_logo"><img src="' + Image(data.body.list[$i + 1].trademarkImage) + '" /></div><div class="trademark_left_text"><p>' + TextName(data.body.list[$i + 1].enterpriseName) + '</p><p>分类：<span>' + TextName(data.body.list[$i + 1].typeName) + '</span></p><p>状态：<span>' + TextName(data.body.list[$i + 1].state) + '</span></p></div></div>';
					$(".knowLogo").append(knowLogo);
				};
			} else {

				var knowLogo = '<div class="detail-konwledge-brand-content1 detail-konwledge-brand1"><!--商标logo--><div class="trademark_left_logo"><img src="img/f-img/default.png" /></div><div class="trademark_left_text"><p>--</p><p>分类：<span>--</span></p><p>状态：<span>--</span></p></div></div><div class="detail-konwledge-brand-content1 detail-konwledge-brand2"><!--商标logo--><div class="trademark_left_logo"><img src="img/f-img/default.png" /></div><div class="trademark_left_text"><p>--</p><p>分类：<span>--</span></p><p>状态：<span>--</span></p></div></div>';
				$(".knowLogo").append(knowLogo);
			};

		};
		//知识产权-域名
		var url8 = "https://120.27.236.240:8443/interface/qualifications/Url/getListByEnterpriseID?enterpriseId=" + urlDateenterpriseId;
		ajaxRequest(url8, knowYM8);

		function knowYM8(data) {
			$(".knownum1").html("(" + data.body.length + ")");
			$('.knowledgeTab li').eq(5).find('span').html(data.body.length);
			var num = Number($(".c_r_message li").eq(2).find('span').html());
			$(".c_r_message li").eq(2).find('span').html(num + data.body.length);
			for($i = 0; $i < data.body.length; $i++) {
				var knowYM = '<tr><td>' + ($i + 1) + '</td><td>' + TextName(data.body[$i].url) + '</td><td>' + TextName(data.body[$i].urlName) + '</td><td>' + TextName(data.body[$i].registrationNo) + '</td><td>' + TextName(data.body[$i].registrationDate) + '</td></tr>';
				$(".knowYM").append(knowYM);
			}

		};

		//经营信息-新闻动态
		var url9 = "https://120.27.236.240:8443/interface/enterprise/News/getListByID?enterpriseId=" + urlDateId;
		ajaxRequest(url9, knowNEWS);

		function knowNEWS(data) {
			if(data.body == '' || data.body == undefined) {
				var knowNEWS = '<div class="detail-konwledge-brand-content3 detail-konwledge-brand1"><div class="trademark_left_text1 trademark_left_text3" style="padding-left:350px;color:#2AC8A1">暂无相关信息</div></div>';
				$(".knowNEWS").append(knowNEWS);
			} else {
				for($i = 0; $i < data.body.length; $i++) {
					var knowNEWS = '<div class="detail-konwledge-brand-content3 detail-konwledge-brand1"><div class="trademark_left_text1 trademark_left_text3"><p>' + TextName(TextName(data.body[$i].newstitle)) + '</p><p>' + TextName(format(data.body[$i].createtime, 1)) + ' ' + data.body[$i].enterprisename + '</p><p><span style="margin-right: 0;" class="newsText">' + data.body[$i].content + '</span></p><a href="#">阅读全文<span><img src="img/sanjiao.jpg"/></span></a>	</div></div>';
					$(".knowNEWS").append(knowNEWS);
				}
				$(".newsNum").html("(" + data.body.length + ")");
				$(".operate ul li").eq(0).find('span').html(data.body.length);
				var num = Number($(".c_r_message li").eq(5).find('span').html());
				$(".c_r_message li").eq(5).find('span').html(num + data.body.length);
			}

		};

	})
	//发表企业评价基本信息
var userId = 1;
var urlUser = "https://120.27.236.240:8443/interface/user/getUserInfo?userID=" + userId;
ajaxRequest(urlUser, conmpayUser);

function conmpayUser(data) {
	var appenImg = '<img src="https://120.27.236.240:8443/' + data.body.photo + '">';
	$(".w-author--prcture-sm").append(appenImg);
	$(".w-author-name").html(TextName(data.body.shortName));
	$(".w-babiao-btn").click(function() {
		var urlfs = 'https://120.27.236.240:8443/interface/options/Comment/add?enterpriseId=1&userID=1'
		var fabiaoText = $(".fabiao").val();
		$.ajax({
			type: "post",
			url: url,
			async: true,
			data: {
				content: fabiaoText
			},
			success: function(data) {

			}

		})
	})
};
//企业印象的点击事件
$(".w-Input-btn span").click(function() {
	var color = $(this).css("border-color");
	if(color == 'rgb(247, 73, 39)') {
		$(this).css({
			'border-color': '#E3EfEd',
			color: '#AECCC7',
			background: '#fafafa'
		});
	} else {
		$(this).css({
			'border-color': '#f74927',
			color: '#f74927',
			background: '#ffefef'
		});
	}
});