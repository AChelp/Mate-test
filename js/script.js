
var linkNav = document.querySelectorAll('[href^="#article"]'),
    V = 0.5;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function(e) {
    e.preventDefault();
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash
      }
    }
  }, false);
}



var overlay = document.getElementById('playbutton');
var vid = document.getElementById('video');

if(overlay.addEventListener){
		overlay.addEventListener("click", play, false)
	}else if(overlay.attachEvent){
		overlay.attachEvent("onclick", play)
	}

function play() { 
    if (vid.paused){
        vid.play(); 
        playbutton.className = "o";
        note.className = "o";
    }else {
        vid.pause(); 
        playbutton.className = "";
    }
} 