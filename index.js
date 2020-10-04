const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
const c = canvas.getContext('2d')
const ctxtx = canvas.getContext('2d')
const ctxtxtx = canvas.getContext('2d')
const ctxtxtxtx = canvas.getContext('2d');
 function DrawTriangle() {
    ctxtx.beginPath();
    ctxtx.moveTo(1100 + deltaX, 100  + deltaY);
    ctxtx.lineTo(870  + deltaX, 150  + deltaY);
    ctxtx.lineTo(930  + deltaX, 15 + deltaY);
    ctxtx.stroke();
 }
 function DrawStar() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(108 + deltaX, 0.0 + deltaY);
    ctx.lineTo(141 + deltaX, 70 + deltaY);
    ctx.lineTo(218 + deltaX, 78.3 + deltaY);
    ctx.lineTo(162 + deltaX, 131 + deltaY);
    ctx.lineTo(175 + deltaX, 205 + deltaY);
    ctx.lineTo(108 + deltaX, 170 + deltaY);
    ctx.lineTo(41.2 + deltaX, 205 + deltaY);
    ctx.lineTo(55 + deltaX, 131 + deltaY);
    ctx.lineTo(1 + deltaX, 78 + deltaY);
    ctx.lineTo(75 + deltaX, 68 + deltaY);
    ctx.lineTo(108 + deltaX, 0 + deltaY);
    ctx.closePath();
    ctx.fill();
 }
 function DrawRect() {
    ctxtxtx.beginPath();
    ctxtxtx.rect(500 + deltaA, 500 + deltaB, 350, 100);
    ctxtxtx.strokeStyle = "green";
    ctxtxtx.fillStyle = "yellow";
    ctxtxtx.fill();
    ctxtxtx.lineWidth = 1;
    ctxtxtx.stroke();
 }
function DrawSquare() {
    
ctx.beginPath();
ctx.rect(200 + deltaA, 200 + deltaB, 100, 100);
ctx.strokeStyle = "blue";
ctx.fillStyle = "orange";
ctx.fill();
c.lineWidth = 1;
ctx.stroke();
}

function DrawCircle() {
c.beginPath();
c.arc(600 + deltaX, 200 + deltaY, 50, 0, Math.PI * 2, false);
c.strokeStyle = 'grey';
c.fillStyle = 'red'
c.fill();
c.lineWidth = 1;
c.stroke();
}
window.addEventListener("keydown", moveCircle, false);

var deltaX = 0;
var deltaY = 0;
var deltaA = 0;
var deltaB = 0;
function moveCircle(e) {
    switch(e.keyCode) {
        case 37:
            deltaX -= 2;
            break;
        case 38:
            deltaY -= 2;
            break;
        case 39:
            deltaX += 2;
            break;
        case 40:
            deltaY += 2;
            break;
    }
    e.preventDefault();
    DrawCircle();
    DrawTriangle();
    DrawStar();
  
}

window.addEventListener("keydown", moveSquare, false);
function moveSquare(e) {
    switch(e.keyCode) {
        case 65:
            deltaA -= 2;
            break;
        case 87:
            deltaB -= 2;
            break;
        case 68:
            deltaA += 2;
            break;
        case 83:
            deltaB += 2;
            break;
    }
    e.preventDefault();

    DrawSquare();
    DrawRect();
}
    
  
    
