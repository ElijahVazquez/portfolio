$(document).ready(function(){

var windowWidth = $(window).width();
var mobile = false;
var tablet = false;
var desktop = false;
if(windowWidth < 768){
    mobile = true;
}else if(windowWidth > 767 && windowWidth < 1025){
    tablet = true;
}else if(windowWidth >1024){
    desktop = true;
}

$(window).resize(function(){
	var windowWidth = $(window).width();
	var mobile = false;
	var tablet = false;
	var desktop = false;

	if(windowWidth < 768){
	    mobile = true;
	}else if(windowWidth > 767 && windowWidth < 1025){
	    tablet = true;
	}else if(windowWidth >1024){
	    desktop = true;
	}
});

//smooth scroll FN (borrowed from a coworker who I'm pretty sure borrowed from the internet)
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function () {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex', '-1'); 
          $target.focus();
        };
      });
    }
  }
});
  function checkIE(){
    if (/MSIE 10/i.test(navigator.userAgent)) {
       return true;
    }
    if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
        return true;
    }
    if (/Edge\/\d./i.test(navigator.userAgent)){
       return true;
    }
    return false;
  }

$('body').on('touch click','.triContain',function(){
	$(".menu").toggleClass('active').parents('.navContain').toggleClass('active');
});

$("body").on("touch click",".expand",function(e){
  var newText = $(this).attr('data-text');
  var oldText = $(this).text()
  $(this).text(newText).attr('data-text',oldText);
  if(checkIE()){
  	$(this).parents(".workSection").toggleClass('active IE').find('.showMore').slideToggle(); 
  }else{
    $(this).parents(".workSection").toggleClass('active').find('.showMore').slideToggle();
  }
});

}); //end of js file (closing the doc.ready fn)