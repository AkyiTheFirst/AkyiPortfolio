$(document).ready(function(){
	$(window).scroll(function(){
		/*if(this.scrollY > 40)*/
        if($(document).scrollTop() > 70){
			$('.bgimgWrap').addClass("onscroll");
            $('.coverImg').addClass("onscroll");
            $('.profile').addClass("onscroll");
		}else{
			$('.bgimgWrap').removeClass("onscroll");
            $('.coverImg').removeClass("onscroll");
            $('.profile').removeClass("onscroll");
		}
	});
	$(".projectCard").click(function(){
		//var imgLink = $(".projectImg").attr("src");
		//$("a").attr("href", imgLink);
		var imgLink = $(this).children().children().attr("src");
		$("a").attr("href", imgLink);
	})
});

