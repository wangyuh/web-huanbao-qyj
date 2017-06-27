$(function(){
	var areaAllInner=$(".area-all-inner");
	var wRegionalTitle=$(".w-regional-title");
	var wCitysContainer=$(".w-citys-container");
	var wCitysName=$(".w-citys-name");
	var wCitysToggleContainer=$(".w-citys-toggle-container");
	wRegionalTitle.on('click', function() {
		wCitysContainer.toggle();
	});
	wCitysName.on('click', function(event) {
		wCitysName.removeClass('w-active');
		if($(this).parent().siblings().length>0){
			var leftRange=$(this).offset().left;
			var parentLeft=wCitysContainer.offset().left;
			wCitysToggleContainer.hide();
			$(this).addClass('w-active');
			$(this).parent().next("div").show();
			$(this).parent().next("div").children('.srlangle-border-up').css("left",leftRange-parentLeft+10);
		}else{
			$(this).addClass('w-active');
			wCitysToggleContainer.hide();
			areaAllInner.children('span').removeClass('w-active2');			
			wCitysContainer.hide();
			if($(this).html()=="不限区域"){				
				wRegionalTitle.html("区域");
			}else{
				wRegionalTitle.html($(this).html());
			}
		}		
	});
	areaAllInner.on('click', function() {
		areaAllInner.children('span').removeClass('w-active2');
		$(this).children('span').addClass('w-active2');
		wCitysContainer.hide();
		if($(this).children('span').html()=="全部"){
			wRegionalTitle.html($(this).parent().prev().children('.w-citys-name').html());
		}else{
			wRegionalTitle.html($(this).children('span').html());
		};	
	});

})