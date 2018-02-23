
$('body').on('touch click','.triContain',function(){
	$(".menu").toggleClass('active').parents('.navContain').toggleClass('active');
	$('body').toggleClass('fixed');
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
