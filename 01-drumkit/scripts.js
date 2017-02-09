function playSound(e){
    // where 'e' is the object being returned when a key is hit and keyCode is the property we're interested in
    var keyCode = e.keyCode;
    var audio = document.querySelector('audio[data-key="' + keyCode +'"]');
    var key = document.querySelector('.key[data-key="' + keyCode +'"]');

    if(!audio) return; // stop the fuction from running altogether
    audio.currentTime = 0; // rewind audio to the start so it will start over no matter how fast you're pressing keys
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
  if (e.propertyName != 'transform') return; //skip this function if it's not a transform property
  console.log(e.propertyName);
  this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
for (var i = 0; i < keys.length; i++) {
  key = keys[i]
  key.addEventListener('transitionend', removeTransition);
}
// Listen for the keydown event, ie a key being pressed
window.addEventListener('keydown', playSound);
