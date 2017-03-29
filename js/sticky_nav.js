'use strict';

//jQuery sticky navigation

//define the header's height, add an invisible buffer to avoid navigation jankiness
var headerHeight;

// COMMENTTED OUT DOCUMENT.READY FUNCTION
// $(function() {
 headerHeight = $('header').height();
 $('#buffer').css("min-height", headerHeight).hide();
// });

// Scroll event listener
$(window).scroll(function() {
//requires that the window is larger than small phone to work
    if (window.innerWidth  > 300){
        if (!$('.focal-overlay').length) {
          var imgHeight = 0;
        } else {
          var focalImg = $('.focal-overlay');
          var imgHeight = focalImg.height();
        }

    if ($(this).scrollTop() > imgHeight){
          $('nav#responsive-sticky-nav').addClass("topNotch");
          $('#buffer').show();
      }
      else{
          $('nav#responsive-sticky-nav').removeClass("topNotch");
          $('#buffer').hide();
      }
    }//end if (window.innerHeight)
});//end window .scroll
