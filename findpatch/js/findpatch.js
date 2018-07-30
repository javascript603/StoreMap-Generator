window.onload = function () {

  var canvas = document.getElementById("canvas"),
      c = canvas.getContext("2d"),
      boxSize = 40,
      boxes = Math.floor(600 / boxSize);
  canvas.addEventListener('click', handleClick);
  canvas.addEventListener('mousemove', handleClick);

  function drawBox() {
      c.beginPath();
      c.fillStyle = "white";
      c.lineWidth = 3;
      c.strokeStyle = 'black';
      for (var row = 0; row < boxes; row++) {
          for (var column = 0; column < boxes; column++) {
              var x = column * boxSize;
              var y = row * boxSize;
              c.rect(x, y, boxSize, boxSize);
              c.fill();
              c.stroke();
          }
      }
      c.closePath();
  }

  function handleClick(e) {
      c.fillStyle = "black";

      c.fillRect(Math.floor(e.offsetX / boxSize) * boxSize,
          Math.floor(e.offsetY / boxSize) * boxSize,
          boxSize, boxSize);
  }

  drawBox();
}