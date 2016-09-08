$(document).ready(function(){
	$(".blog_begin_img").hover(
		function(){
			$(this).children().find(".blog_begin_img_headline").css('display', 'none');
		},
		function(){
			$(this).children().find(".blog_begin_img_headline").css('display', 'block');
	});
});