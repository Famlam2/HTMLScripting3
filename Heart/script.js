function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

function isInBounds(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

var rect = {
    x: 100,
    y: 100,
    width: 200,
    height: 100,
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.addEventListener("click", function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (isInBounds(mousePos, rect)) {
        alert('clicked inside rect');
    } 
    else {
        alert('clicked outside rect');
    }
}, false);

function SurprisebButton(rect, lWidth, fillColor, lineColor) {
    let ctx = context;
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = 'rgba(225,225,225,0.5)';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();
    // context.font = '40pt Kremlin Pro Web';
    ctx.fillStyle = '#000000';
    ctx.fillText('Surprise', rect.x + rect.width / 4, rect.y + 64);
}
SurpriseButton(rect);