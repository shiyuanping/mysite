// JavaScript Document

$(document).ready(function(){
	$(".tab li").click(function(){
		$(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
		$(".content").hide().eq($(this).index()).show();
	   //��һ�ַ���: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 	
		});
	});