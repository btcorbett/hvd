const lSq = new Audio("content/Logan_Square.mp3");
let btn_play = document.getElementById('btn-play');
let btn_pause = document.getElementById('btn-pause');
let btn_stop = document.getElementById('btn-stop');

btn_play.addEventListener('click', function() {
  lSq.play();
});

btn_pause.addEventListener('click', function() {
  lSq.pause();
});

btn_stop.addEventListener('click', function() {
  lSq.pause();
  lSq.currentTime = 0;
});
