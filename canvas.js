var canvas = document.getElementById("drawing");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "blue";
ctx.rect(30, 30, 50, 50);
ctx.stroke();

// Blue rectangle
ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "antiquewhite";
ctx.rect(50, 50, 150, 80);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.rect(5, 5, 290, 140);
ctx.stroke();

function downloadPNG() {
    var canvas = document.getElementById("drawing");
    var dataURL = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "drawing.png";
    link.click();
  }
  
  function downloadJPG() {
    var canvas = document.getElementById("drawing");
    var dataURL = canvas.toDataURL("image/jpeg");
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "drawing.jpg";
    link.click();

  }





//link.addEventListener('click',functionDownload)


      