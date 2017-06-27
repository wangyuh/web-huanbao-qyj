/*********搜索结果-条件筛选页-企业模块*************/

$(document).ready(function() {
	var flag = true,
		flag1 = true,
		flag3 = true;
	var mlen = $(".search-content-more").size();
	// 右侧更多展示
	for(var i = 0; i < mlen; i++) {
		(function(l) {
			$(".search-content-more").eq(l).click(function() {
				if(flag) {
					$(".search-content-more").eq(l).css("background", "url(./img/shangl.png) no-repeat right center");
					$(".search-container").eq(l).css({
						"overflow": "visible",
						"height": "auto"
					});
					flag = false;
				} else {
					$(".search-content-more").eq(l).css("background", "url(./img/xial.png) no-repeat right center");
					$(".search-container").eq(l).css({
						"overflow": "hidden",
						"height": "68px"
					});
					flag = true;
				}
			});
		})(i)
	}

	// 更多图片更换
	$(".deep-search-value").click(function() {
		if(flag1) {
			$(".deep-search-select-types").css("display", "block");
			$(".deep-search-type-default").css("background", "url(./img/shangl.png) no-repeat right center");
			flag1 = false;
		} else {
			$(".deep-search-select-types").css("display", "none");
			$(".deep-search-type-default").css("background", "url(./img/xial.png) no-repeat right center");
			flag1 = true;
		}
	});

	// 下拉菜单悬浮样式
	$(".deep-search-select-lists").hover(function() {
		$(this).addClass("selected");
	}, function() {
		$(this).removeClass("selected");
	});

	// 筛选选择
	function aclick(d) {

		$(d + " .search-content-list-ul>li>a").click(function() {
			var flag2 = true;

			$(d + " .fwsearch").removeClass("search-content-list-on");
			if(d == ".enter-scope") {
				if(flag2) {
					$(this).addClass("search-content-list-on");
					flag2 = false;
				} else {
					$(this).removeClass("search-content-list-on");
					flag2 = true;
				}

			} else {
				if(flag2) {
					$(this).parent().siblings("li").find("a").removeClass("search-content-list-on")
					$(this).addClass("search-content-list-on");
					flag2 = false;
				} else {
					$(this).removeClass("search-content-list-on");
					flag2 = true;
				}
			}

		});
		$(d + " .fwsearch").click(function() {
			$(this).addClass("search-content-list-on");
			$(d + " .search-content-list-ul>li>a").removeClass("search-content-list-on");
		});
	}

	aclick(".enter-scope");
	aclick(".capital")
	aclick(".establishment");

	// 收藏
	$(".no-follow").click(function() {
		if(flag3) {
			$(this).css("background", "url(./img/has_follow.png) no-repeat center center");
			flag3 = false;
		} else {
			$(this).css("background", "url(./img/no_follow_20160421.png) no-repeat center center");
			flag3 = true;
		}
	});
	$('.search-module-slider').click(function() {
		$(".search-condition-module").slideToggle("slow");
	});

	$('.common-footer').load('commonFooter.html');
	for($i = 1; $i < $(".industry ul").length; $i++) {
		var leftNum = $i * 32 + "px"
		$(".industry ul").eq($i).css({
			position: 'absolute',
			top: leftNum,
			left: '274px'
		});

		$(".industry ul").eq($i).hide();
	}
	$(".toggle-industry").click(function() {
		$(".industry").fadeToggle("slow");
	});
	$(".sel li").mouseover(function() {
		for($i = 1; $i < $(".industry ul").length; $i++) {
			$(".industry ul").eq($i).hide();
		}
		$(".industry ul").eq($(this).index()).show();
		$(".industry ul").eq($(this).index()).children().click(function() {
				$(".toggle-industry").html($(this).html());
				$(this).parent().hide();
				$(".industry").hide();
			})
			//          alert($(this).index())
	});
	$(".industry ul").mouseleave(function() {
		$(this).hide();
		$(".industry ul").eq(0).show();
	});
	$(window).click(function() { //帮订body事件
		$(".industry").hide();
		$(".w-citys-container").hide();
	});
	$('.register').mouseover(function() {
		$(".personal-center-ul").show();
	});
	$('.register').mouseleave(function() {
		$(".personal-center-ul").hide();
	});

	$('.username-quit').click(function() {
		$('.register>a').html('登录');

		$('.personal-center-ul>ul').css('display', 'none');
		$('.personal-center-ul').css('display', 'none');
	});
});
//分页函数的封装；	
function page(pageEnd, url, invitation) {
	$(".page .pages").children().remove();
	if(pageEnd <= 11) {

		for($i = 1; $i <= pageEnd; $i++) {
			var li = '<li>' + $i + '</li>';
			$('.pages').append(li);
		}
	} else {
		for($i = 1; $i <= 9; $i++) {

			var li = '<li>' + $i + '</li>';
			$('.pages').append(li);
		}
		$(".page ul li").eq(10).html(pageEnd);
		$('.pages').append('<li>…</li>');
		$('.pages').append('<li>' + pageEnd + '</li>');
	}

	$(".page ul li").click(function() {
		$('.environmental_protection_text_all').parent().children().remove();
		for($i = 0; $i <= $(".pages li").length; $i++) {
			$(".pages li").eq($i).css({
				"background-color": "white",
				color: '#29c9a0'
			})
		}
		if(Number($(this).html()) > 6 && Number($(this).html() < (pageEnd - 5))) {
			$(".page li").eq(1).html("…");
			$(".page li").eq(9).html("…");
			var num = Number($(this).html()) - 5;
			for($i = 2; $i <= 8; $i++) {
				$(".pages li").eq($i).html(num + $i);
			}
			$(".pages li").eq(5).css({
				"background-color": "#29c9a0",
				color: 'white'
			});
		} else if(Number($(this).html()) <= 6) {
			for($i = 1; $i <= 9; $i++) {
				$(".pages li").eq($i - 1).html($i);
			}
			$(this).css({
				"background-color": "#29c9a0",
				color: 'white'
			});
		} else if(Number($(this).html()) >= (pageEnd - 5)) {
			var num = pageEnd - 10;
			$(".pages li").eq(1).html("…");
			for($i = 2; $i <= 10; $i++) {
				$(".pages li").eq($i).html(num + $i);
			}
			$(this).css({
				"background-color": "#29c9a0",
				color: 'white'
			});
		}
		$.post(url + Number($(this).html())).done(function(data) {
			invitation();
		});
	});

};