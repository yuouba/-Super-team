

for(var i=0;i<$('.m-imge').length;i++){
	$('.m-imge').eq(i).hover(function(){
		$(this).children('img').css('transform','translateX(-10px)')
		$(this).children('img').css('transition','.3s')
	},function(){
		$(this).children('img').css('transform','translateX(0px)')
		$(this).children('img').css('transition','.3s')
	})
}
