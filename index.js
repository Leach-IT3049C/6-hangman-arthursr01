const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
const c = canvas.getContext('2d')


function DrawSquare() {
    
ctx.beginPath();
ctx.rect(200 + deltaA, 200 + deltaB, 150, 100);
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
}