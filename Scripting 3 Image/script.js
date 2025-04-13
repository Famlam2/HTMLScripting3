let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

drawHeart('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', '#5D3A2F', 'beige')

function drawHeart(clr1, clr2, clr3, clr4, clr5, clr6, clr7, clr8, bg) {
    // BG
    ctx.beginPath();
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 485, 700);
    ctx.fill();
    
    // Top Section (Circles)
    drawSemiCircles(clr1, 160, 175, 80, Math.PI, 0);
    drawSemiCircles(clr2, 160, 175, 80, 0, Math.PI);
    drawRect(clr2, 137.5, 175, 205, 50)
    drawTrap(clr3, 137.5, 225, 205, 50, 40)
    drawRect(clr3, 175, 225, 130, 50);

    // Bottom Section (Multi-Colour Triangle)
    drawTrap(clr4, 172.5, 275, 135, 50, 35);
    drawTrap(clr5, 195, 325, 90, 50, 23);
    drawTrap(clr6, 217.5, 375, 45, 50, 22);
    drawTrap(clr7, 239.5, 425, 1, 50, 22);

    // Dot
    ctx.beginPath();
    ctx.fillStyle = clr8;
    ctx.arc(240, 550, 50, 0, Math.PI * 2);
    ctx.fill();
}

function drawRect(colour, x, y, w, h) {
    ctx.beginPath();
    ctx.fillStyle = colour;
    ctx.rect(x, y, w, h);
    ctx.fill();
}

function drawTrap(colour, x, y, w, h, x2) {
    // Draws a trapezium
    ctx.beginPath();
    ctx.fillStyle = colour;
    ctx.rect(x, y, w, h);

    // Left "Triangle"
    ctx.moveTo(x, y);
    ctx.lineTo(x-x2, y);
    ctx.lineTo(x, y+h);

    // Right "Triangle"
    ctx.moveTo(x+w, y);
    ctx.lineTo(x+w+x2, y);
    ctx.lineTo(x+w, y+h)
    ctx.fill();
}

function drawSemiCircles(colour, x, y, r, sr, er) {
    ctx.beginPath();
    ctx.fillStyle = colour;
    ctx.arc(x, y, r, sr, er);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + r*2, y, r, sr, er);
    ctx.fill();
}

// Hidden Button
function getMousePos(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

let rect = {
    x: 160,
    y: 175,
    width: 160,
    height: 75,
};

function isInBounds(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

canvas.addEventListener("click", function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (isInBounds(mousePos, rect)) {
        alert("boop <3");
    }
}, false);

function SurpriseButton(rect, lWidth, fillColor, lineColor) {
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = "transparent";
    ctx.fill();
}
SurpriseButton(rect);