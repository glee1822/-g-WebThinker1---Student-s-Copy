let x,y,dx,dy,radius,canvas,ctx;
let x2,y2,dx2,dy2,radius2,ctx2;
window.onload = () => {
    canvas = document.getElementById('canvasBoard');
    ctx = canvas.getContext('2d');

    radius = 15;

    x = canvas.width / 2 - radius /  2;
    y = canvas.height /2 - radius / 2;
    dx = 20;
    dy = 20;
    
    draw();

  
    ctx2 = canvas.getContext('2d');

    radius2 = 15;

    x2 = canvas.width / 2 - radius2 /  2;
    y2 = canvas.height /2 - radius2 / 2;
    dx2 = 10;
    dy2 = 10;
    
    draw2();
}

const draw = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "rgb(0,143,143)"
    ctx.arc(x,y,radius, 0, Math.PI * 2)
    ctx.fill();
    ctx.closePath();

    if (x+dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }

    if (y+dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    x = x+dx
    y = y+dy

    requestAnimationFrame(draw);
}

const draw2 = () => {
    ctx2.clearRect(0,0,canvas.width,canvas.height);

    ctx2.beginPath();
    ctx2.fillStyle = "rgb(0,143,143)"
    ctx2.arc(x2,y2,radius2, 0, Math.PI * 2)
    ctx2.fill();
    ctx2.closePath();

    if (x2+dx2 > canvas.width - radius2 || x2 + dx2 < radius2) {
        dx2 = -dx2;
    }

    if (y2+dy2 > canvas.height - radius2 || y2 + dy2 < radius2) {
        dy2 = -dy2;
    }

    x2 = x2+dx2
    y2 = y2+dy2

    requestAnimationFrame(draw2);
}