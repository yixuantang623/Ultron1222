/*****Google Analytics******/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-92994917-1', 'auto');
  ga('send', 'pageview');
  
  
////////////menu_btn影藏&顯示
$(function(){
	$(".top_menu_b .menu_btn ,.top_menu_w .menu_btn").mouseover(function(){
		$(".top_menu_b .menu_dowm ,.top_menu_w .menu_dowm").stop().slideToggle(200);
		$(".Touch_Close").stop().toggle();
		return false;
	});
	$(".top_menu_b .menu_btn ,.top_menu_w .menu_btn").click(function(){
		$(".top_menu_b .menu_dowm ,.top_menu_w .menu_dowm").stop().slideToggle(200);
		$(".Touch_Close").stop().toggle();
		return false;
	});
	$(".Touch_Close").click(function(){
		$(".top_menu_b .menu_dowm ,.top_menu_w .menu_dowm").stop().slideToggle(200);
		$(".Touch_Close").stop().toggle();
		return false;
	});
	$(".top_menu_b,.top_menu_w").hover(function(){},function(){
		$(".top_menu_b .menu_dowm ,.top_menu_w .menu_dowm").stop().slideUp(200);
		$(".Touch_Close").stop().fadeOut(800);
		return false;
	});

});


////////////service大區塊隱藏顯示
$(function(){
	$(".service_img2 .b1").mouseover(function(){
		$(".service_img2 .bg1").stop().fadeToggle(500);
		$(".service_img2 .bg2").stop().fadeOut(500);
		$(".service_img2 .bg3").stop().fadeOut(500);
		$(".service_img2 .bg4").stop().fadeOut(500);
		return false;
	});
	$(".service_img2 .b2").mouseover(function(){
		$(".service_img2 .bg2").stop().fadeToggle(500);
		$(".service_img2 .bg1").stop().fadeOut(500);
		$(".service_img2 .bg3").stop().fadeOut(500);
		$(".service_img2 .bg4").stop().fadeOut(500);
		return false;
	});
	$(".service_img2 .b3").mouseover(function(){
		$(".service_img2 .bg3").stop().fadeToggle(500);
		$(".service_img2 .bg2").stop().fadeOut(500);
		$(".service_img2 .bg1").stop().fadeOut(500);
		$(".service_img2 .bg4").stop().fadeOut(500);
		return false;
	});
	$(".service_img2 .b4").mouseover(function(){
		$(".service_img2 .bg4").stop().fadeToggle(500);
		$(".service_img2 .bg2").stop().fadeOut(500);
		$(".service_img2 .bg3").stop().fadeOut(500);
		$(".service_img2 .bg1").stop().fadeOut(500);
		return false;
	});

});

////////////about我們在乎
//$(function(){
//	$(".about_img2 .icon li.b1").mouseover(function(){
//		$(".mwt_border.c1,   .about_img2 .icon img.m1a,   .about_img2 .icon img.m2,   .about_img2 .icon img.m3").stop().show();
//		$(".mwt_border.c2, .mwt_border.c3, .about_img2 .icon img.m1, .about_img2 .icon img.m2a ,.about_img2 .icon img.m3a ,.about_img2 .cover").stop().hide();
//		return false;
//	});
//	$(".about_img2 .icon li.b2").mouseover(function(){
//		$(".mwt_border.c2,   .about_img2 .icon img.m2a,   .about_img2 .icon img.m1,   .about_img2 .icon img.m3").stop().show();
//		$(".mwt_border.c1,.mwt_border.c3, .about_img2 .icon img.m2, .about_img2 .icon img.m1a ,.about_img2 .icon img.m3a ,.about_img2 .cover").stop().hide();
//		return false;
//	});
//	$(".about_img2 .icon li.b3").mouseover(function(){
//		$(".mwt_border.c3,   .about_img2 .icon img.m3a,   .about_img2 .icon img.m1,   .about_img2 .icon img.m2").stop().show();
//		$(".mwt_border.c2,.mwt_border.c1, .about_img2 .icon img.m3, .about_img2 .icon img.m2a ,.about_img2 .icon img.m1a ,.about_img2 .cover").stop().hide();
//		return false;
//	});
//});
 
////////////滑動指定地方
$(function(){
	
	$(".arrow").click(function(){

		$('html,body').animate({scrollTop: $("#anchor2,#service").offset().top}, 500);
		return false;

	});

});

$(function(){
	
	$("#btn_service,#btn_service2").click(function(){

		$('html,body').animate({scrollTop: $("#service").offset().top}, 500);
		return false;

	});

});
$(function(){
	
	$("#btn_contact,#btn_contact2").click(function(){

		$('html,body').animate({scrollTop: $("#contact").offset().top}, 500);
		return false;

	});

});

///////測試滑動
//$(document).ready(function(){
//
//    $('.window').windows({
//        snapping: true,
//        snapSpeed: 300,
//        snapInterval: 100,
//        onScroll: function(scrollPos){
//            // scrollPos:Number
//        },
//        onSnapComplete: function($el){
//            // after window ($el) snaps into place
//        },
//        onWindowEnter: function($el){
//            // when new window ($el) enters viewport
//        }
//    })
//
//});

