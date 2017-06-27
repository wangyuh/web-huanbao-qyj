
$(document).ready(function(){
	
$.post('http://intf.51hb.co:11000/interface/options/Keyword/getDimensions?queryType=1').done(function  (ret) {
	console.log(ret);
	var hotSearArr1 = [ret.body.list[0].keyWord,ret.body.list[1].keyWord,ret.body.list[2].keyWord,ret.body.list[3].keyWord];
	var hotSearArr2 = [ret.body.list[4].keyWord,ret.body.list[8].keyWord,ret.body.list[6].keyWord,ret.body.list[7].keyWord];
	var hotAArr1 = [96239555,71638781,67153513,137072776];
	var hotAArr2 = [96239467,96221913,96239472,96221923];
	console.log(hotAArr1)
	function hotSearch (hotsa,hots) {
	  for ( var i = 0; i< hots.length;i++ ) {
	var hotAnam = hotsa[i];
	var hotSearArrNam = hots[i];
	var hotSearch = '<li><a href="company.html?companyId='+ hotAnam +'">'+ hotSearArrNam +'</a></li>';
    $('.z-banner-search-hot ul').append(hotSearch);
	  }
	};
	hotSearch(hotAArr1,hotSearArr1);
	var hotBool = true;
	$('.z-banner-search-batch').click(function  () {
		$('.z-banner-search-hot ul').children().remove();
		if (hotBool) {
			hotSearch(hotAArr2,hotSearArr2);
			hotBool = false;
		} else{
			hotSearch(hotAArr1,hotSearArr1);
			hotBool = true;
		}
	});
		
});
$.post('http://intf.51hb.co:11000/interface/green/getNews').done(function  (read) {
	console.log(read);
	for (var i=0;i<read.body.list.length;i++) {
		var suggestRead = '<li><div class="z-recommend-con-r-ul-li1"><img src="'
		+read.body.list[i].imgurl +
		'"/></div><a href="newsDetails.html"><p>'+ read.body.list[i].postTitle +
		'</p></a></li>';
		 $('.z-recommend-con-r-ul').append(suggestRead);
	}
	
})

	var navtop = $(".z-banner-nav-h").offset().top;

	// 选择搜索
	var searcharr = ["输入企业 , 关键词 , 法人等 , 多关键词用空格隔开",
									"请输入企业名称关键字、注册号或者社会统一自用代码",
									"请输入法人名称或股东名称",
									"请输入企业经营范围"];
	var searchli = $(".z-banner-search-ul li").size();
	for(var i=0;i<searchli;i++){
		(function(l){
			$(".z-banner-search-ul li").eq(l).click(function(){
				$(this).siblings("li").find("a").removeClass("colormain");
				$(this).find("a").addClass("colormain");
				$(".z-banner-search-l input").attr("placeholder",searcharr[l]);
			});
		})(i)
	}
	
	// 导航吸顶
	$(window).scroll(function(){
		if($(document).scrollTop() > navtop){
			$(".z-banner-nav").addClass("z-banner-nav2");
			$(".z-banner-nav-h").addClass("z-banner-nav-h2");
		}else{
			$(".z-banner-nav").removeClass("z-banner-nav2");
			$(".z-banner-nav-h").removeClass("z-banner-nav-h2");
		};
	})

	// 鼠标悬浮事件
	var homeimgsArr = ['img/z-img/shujuxuanzhong.png','img/z-img/chhufa-xuanzhong.png','img/z-img/huanbaozizhi-xuanzhong.png',
	'img/z-img/jishuxuanzhong.png','img/z-img/zhaoxuqiuxuanzhong.png'];
	var homeimgsArrDefault = ['img/z-img/shujumoren.png','img/z-img/chufa-moren.png','img/z-img/huanbaozizhi-moren.png',
	'img/z-img/jishu-moren.png','img/z-img/zhaoxuqiumoren.png'];
	
	var homeimgsArr1 = ['img/z-img/gongshang-xuanzhong.png','img/z-img/shangbiaoxuanzhong.png','img/z-img/zhuanlixuanzhong.png',
	'img/z-img/shixinrenxunzhong.png','img/z-img/caipan-xuanzhong.png'];
	var homeimgsArrDefault1 = ['img/z-img/gongshang-moren.png','img/z-img/shangbiaomoren.png','img/z-img/zhuanlimoren.png',
	'img/z-img/shixinrenmoren.png','img/z-img/caipan-moren.png'];
	homeimgsChange(".mouse-over-img1 li",homeimgsArr,homeimgsArrDefault);
	homeimgsChange(".mouse-over-img2 li",homeimgsArr1,homeimgsArrDefault1);
	function homeimgsChange (clicklabel,checkarr1,checkarr2) {
		$(clicklabel).hover(function(){
		$(this).css({
			"background-color":"#29c9a0"		
		});
		$(this).find('p').css("color","#fff");
		$(this).find('img').attr('src',checkarr1[$(this).index()]);
//		alert($(this).index());
	},function(){
		$(this).css({
			"background-color":"#f2f3f5",
		});
		$(this).find('p').css("color","#333");
		$(this).find('img').attr('src',checkarr2[$(this).index()]);
	});
	}
	$(".bg1").hover(function(){
		$(this).parents("li").find(".ewm").css("display","block");
	},function(){
		$(this).parents("li").find(".ewm").css("display","none");
	});

	$(".bg2").hover(function(){
		$(this).parents("li").find(".ewm").css("display","block");
	},function(){
		$(this).parents("li").find(".ewm").css("display","none");
	});
	$('.we-chat-title').mouseenter(function  () {
		$('.we-chat').show();
	});
	$('.we-chat-title').mouseleave(function  () {
		$('.we-chat').hide();
	});
	$('.phone-app-title').mouseenter(function  () {
		$('.phone-app').show();
	});
	$('.phone-app-title').mouseleave(function  () {
		$('.phone-app').hide();
	});
	$('.z-banner-search-r').click(function () {
	var searchContent = $('.search-content-stor').val();
	sessionStorage.setItem('searchContent',searchContent);
	    $('.search-content-stor').val('');
	});
	

	//回到顶部底部
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
	
});

