canvas = document.getElementById("my_Canvas");
var ctx = canvas.getContext("2d");
var color = "mediumturquoise";

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth = 3;
ctx.arc (300,300,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth = 3;
ctx.arc (350,300,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth = 3;
ctx.arc (400,300,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth = 3;
ctx.arc (325,330,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth = 3;
ctx.arc (375,330,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth = 5;
ctx.rect (250,250,200,125);
ctx.stroke();
