'use strict';

//jQuery allowing for a sticky navigation

$(window).scroll(function() {

if (window.innerWidth  > 300){ //requires that the window is larger than small phone to work

  const focalImg = $('.focalImg');
  // console.log(focalImg);
  const imgHeight = focalImg.height();
  // console.log(imgHeight);


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
