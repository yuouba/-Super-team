for(var i=0;i<$('.t-active>ul>li>.t-imge').length;i++){
	$('.t-active>ul>li>.t-imge').eq(i).hover(function(){
		$(this).children('.t-big').css('opacity','1')
		$(this).children('.t-big').css('transition','.6s')
		
	},function(){
		$(this).children('.t-big').css('opacity','0')
		$(this).children('.t-big').css('transition','.6s')
	})
}


