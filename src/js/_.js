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