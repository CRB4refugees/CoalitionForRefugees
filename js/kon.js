const keyPressed = [];
const devName = 'willbjorn!';


window.addEventListener('keyup', (e) => {
  keyPressed.push(e.key);
  keyPressed.splice(-devName.length-1, keyPressed.length - devName.length);
  if (keyPressed.join('').includes(devName)) {
    
    console.log('you did it! you found me!');
    //add code to display here
  }
});
