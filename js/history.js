$(function  () {
//	历史记录
           function add0(m) {
	          return m < 10 ? '0' + m : m
           }

           function format(timestamp, bol) {
	            //timestamp是整数，否则要parseInt转换,不会出现少个0的情况

	            var time = new Date(timestamp);
	            var year = time.getFullYear();
	            var month = time.getMonth() + 1;
	            var date = time.getDate();
	            var hours = time.getHours();
	            var minutes = time.getMinutes();
	            var seconds = time.getSeconds();
	       if(bol) {
		            return year + '-' + add0(month) + '-' + add0(date) + ' ' + add0(hours) + ':' + add0(minutes) + ':' + add0(seconds);

	        } else {
		            return year + '-' + add0(month) + '-' + add0(date);
		            //	+' '+add0(hours)+':'+add0(minutes)+':'+add0(seconds)
	        }

             }
           var allNum = 0;
           for (var i = localStorage.RecentlyViewedNum;i > 1; i--) {
           	         var getHis = 'RecentlyViewed' + i;
           	      if (localStorage.getItem(getHis)) {
           	      	allNum += 1;
           	      	if (allNum<=6) {
           	      		var hisContent = localStorage.getItem(getHis).split("|");
           	      	var hisAppend = '<li><a href="company.html?companyId='+hisContent[2]+'" class="view-company-name">'+ hisContent[0] +'</a><div class="view-company-time">'
									+ format(Number(hisContent[1]),1) +'   查询</div></li>';
							$('.search-result-history ul').append(hisAppend);
           	      	} else{
           	      		localStorage.removeItem(getHis);
           	      	}
           	      } else{
           	      	
           	      }
           }
});
