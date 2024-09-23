var canvas = document.getElementById("drawing");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "blue";
ctx.rect(30, 30, 50, 50);
ctx.stroke();

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

var select = document.getElementById("format")
console.log(format)
select.addEventListener('change',functionDownload)

function functionDownload(){
    var format = this.value
    var li = canvas.toDataURL(image/${format})
    var downloadLink = document.getElementById("download")
    downloadLink.href = li
    downloadLink.download = downloadImage.${format} ;
    
}





//link.addEventListener('click',functionDownload)


      