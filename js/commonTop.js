	$(function  () {
			$('.register').mouseover(function  () {
		$(".personal-center-ul").show();
	});
  $('.register').mouseleave(function  () {
		$(".personal-center-ul").hide();
	});
//var navtop = $(".z-banner-nav-h").offset().top;
// 关掉公告栏
	$(".z-bulletin-board-close").click(function(){
		$(".z-bulletin-board").css("display","none");
//		navtop = $(".z-banner-nav-h").offset().top;
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
		});