window.onload=function(){
var i=0;
$(".content").hover(function(){
	$(".banner ul li a").css("display","block")
},function(){
	$(".banner ul li a").css("display","none")
})
$(".bannertwo ul li").hover(function(){
	$(".banner ul li a").css("display","none")
	i = $(this).index()
	$(".banner ul li").eq(i).fadeIn(300).siblings().fadeOut(300)
	//siblings()获取匹配集合中每个元素的同胞，通过选择器进行筛选是可选的。
	$(this).addClass("bor").siblings().removeClass("bor")
},function(){
	$(".banner ul li a").css("display","block")
})
function auto(){
	i++;
	if(i>6)
	i=0;
	$(".banner ul li").eq(i).fadeIn(300).siblings().fadeOut(300);
	$(".bannertwo ul li").eq(i).addClass("bor").siblings().removeClass("bor")
	
}
setInterval(auto,3000)


var alt=document.getElementsByClassName("alt")[0];
var rightNav=document.getElementsByClassName("rightNav")[0];
var spant=document.getElementsByClassName("spant")[0];
var pw=document.getElementsByClassName("pw")[0];
var Modalbox_one=document.getElementsByClassName("Modalbox_one")[0];
var npm=document.getElementsByClassName("npm")[0];
var Modalbox_Two=document.getElementsByClassName("Modalbox_Two")[0];
var z_at=document.getElementsByClassName("z_at")[0];
var shut=document.getElementsByClassName("shut")[0];

alt.onclick=function(){
	rightNav.style.marginRight="300px";
	rightNav.style.transition="2s"
}
spant.onclick=function(){
	rightNav.style.marginRight="0px";
	rightNav.style.transition="2s"
}
pw.onclick=function(){
	Modalbox_one.style.display="block"
}
npm.onclick=function(){
	Modalbox_one.style.display="none"
}
z_at.onclick=function(){
	Modalbox_Two.style.display="none"
}
shut.onclick=function(){
	Modalbox_Two.style.display="block"
}

function gotop(){
    $('html,body').animate({scrollTop:'0px'},500);
}
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=100){}
    });
    $(".gotop").click(gotop);
});

var oDiv=document.getElementById('spangr');
var aBtn=oDiv.getElementsByTagName('button');
var aDiv=document.getElementsByClassName('del');
var num=0;
for (var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			for (var i=0;i<aBtn.length;i++) {
				aBtn[i].className='';
				aDiv[i].style.display='none'
			}
			num=this.index;
			this.className='active';
			aDiv[this.index].style.display='block';
		}
}
function tr(){
	for (var i=0;i<aDiv.length;i++){
		aBtn[i].className='';
		aDiv[i].style.display='none'
	}
	aBtn[num].className='active';
	aDiv[num].style.display='block';
};


};