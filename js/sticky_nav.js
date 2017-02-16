//jQuery allowing for a sticky navigation

console.log('attached');

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});
