$(".wrong").click(function  () {
	$(this).parent().remove();
})
$(".del-btn").click(function  () {
	$("#news1").children().remove();
})
//显示模态框
$(".insert-add").click(function  () {
	$(".add-personnels").show();
})
//关闭模态框
$(".spa-btn").click(function  () {
	$(".add-personnels").hide();
})
$(".spa-btn2").click(function  () {
	$(".add-personnels").hide();
})
$(".sub-btn").click(function  () {
	$(".add-personnels").hide();
})



