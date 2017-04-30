const keyPressed = [];
const devName = 'willbjorn!';


window.addEventListener('keyup', (e) => {
    keyPressed.push(e.key);
    keyPressed.splice(-devName.length-1, keyPressed.length - devName.length);
    if (keyPressed.join('').includes(devName)) {

      console.log('you did it! you found me!');
      // document.getElementsByTagName('p').
      $("h1").text('Will Bjorn made this site.')
      $("h2").text('Will Bjorn made this site.')
      $("p").html('Check out his profile @ <a href="http://jackofalltrad.es" target="_blank">http://jackofalltrad.es</a>')
      $('img').attr("src", "/assets/images/Enhanced/profile-wb.jpg");
    }
});
