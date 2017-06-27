var myInt = ['.supplier','.sogo','.competitor','.dealer']
$('.content_right>ul li').click(function  () {
	for ($i=0;$i<$('.content_right>ul li').length;$i++) {
		$('.content_right>ul li').eq($i).css({
	        color:'#618dbe'
		})
		$(myInt[$i]).hide();
	}
	$(this).css({
		color:'#e68505'
	})
	$(myInt[$(this).index()]).show();
})