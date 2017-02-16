//jQuery allowing for a sticky navigation

$(window).scroll(function() {

if (window.innerHeight  > 768){ //requires that the window is larger than iPad to work

  const focalImg = $('.focalImg');
  const imgHeight = focalImg.height();


if ($(this).scrollTop() > imgHeight){
    console.log(`This is the window height: ${window.innerHeight} and this is the scroll height: ${$(this).scrollTop()}`)
    $('nav').addClass("sticky");
    console.log('stickified')
  }
  else{
    console.log(`This is the window height: ${window.innerHeight} and this is the scroll height: ${$(this).scrollTop()}`)

    $('nav').removeClass("sticky");

    console.log('sticky removed')
  }

}//end if (window.innerHeight)
});//end window .scroll
