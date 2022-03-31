<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>sample</title>
</head>
<body>
  <button onclick="stop()">停止</button>
  <button onclick="play()" id="play">再生</button>
  <script language="javascript" type="text/javascript">
  var music = new Audio();
  function init() {
    music.preload = "auto";
    music.src = "./mymusic.mp3";
    music.load();

    music.addEventListener("ended", function () {
      music.currentTime = 0;
      music.play();
    }, false);
  }

  function play() {
    music.loop = true;
    music.play();
  }

  function stop() {
    music.pause();
    music.currentTime = 0;
  }

  init();
  </script>
</body>
</html>
