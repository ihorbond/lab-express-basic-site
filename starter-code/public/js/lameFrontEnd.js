var canvas = document.getElementById('rainbow');
var ctx = canvas.getContext("2d");
let endAngle = 1;
let background = new Image();
background.src = "../public/img/background.jpg";

function draw() {


  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "red";
  ctx.arc(canvas.width / 2, canvas.height, canvas.width / 2 - 1, 1 * Math.PI, endAngle * Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "orange";
  ctx.arc(canvas.width / 2 + 5, canvas.height, canvas.width / 2 - 1, 1 * Math.PI, endAngle * Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(canvas.width / 2 + 10, canvas.height, canvas.width / 2 - 1, 1 * Math.PI, endAngle * Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.arc(canvas.width / 2 + 15, canvas.height, canvas.width / 2 - 1, 1 * Math.PI, endAngle * Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.arc(canvas.width / 2 + 20, canvas.height, canvas.width / 2 - 1, 1 * Math.PI, endAngle * Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "indigo";
  ctx.arc(canvas.width / 2 + 25, canvas.height, canvas.width / 2 - 1, 1 * Math.PI, endAngle * Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "violet";
  ctx.arc(canvas.width / 2 + 30, canvas.height, canvas.width / 2 - 1, 1 * Math.PI, endAngle * Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();
  endAngle += 0.03;

  if (endAngle >= 2) {
    endAngle = 0.5;
  }

  requestAnimationFrame(draw);
}

draw();
