'use strict';

//jQuery sticky navigation

$(window).scroll(function() {

if (window.innerWidth  > 300){ //requires that the window is larger than small phone to work

  if (!$('.focal-overlay').length) {
    var imgHeight = 0;
  } else {
    var focalImg = $('.focal-overlay');
    var imgHeight = focalImg.height();
  }

  // console.log(focalImg);


  console.log(imgHeight);


if ($(this).scrollTop() > imgHeight){
    // console.log(true)
    // console.log(`This is the window height: ${window.innerHeight} and this is the scroll height: ${$(this).scrollTop()}`)
    $('nav#responsive-sticky-nav').addClass("topNotch");
    // console.log('stickified')
  }
  else{
    // console.log(false);
    // console.log(`This is the window height: ${window.innerHeight} and this is the scroll height: ${$(this).scrollTop()}`)
    $('nav#responsive-sticky-nav').removeClass("topNotch");
    // console.log('sticky removed')
  }

}//end if (window.innerHeight)
});//end window .scroll
