const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256),
  		g = Math.floor(Math.random() * 256),
   		b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

const animateRectangle = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  context.fillStyle = rectangleColor;
  context.strokeStyle = 'rgb(255,255,255)';
  context.fillRect(x, 250, 200, 150);
  context.strokeRect(x-1, 249, 202, 152);
  
  if (x < 700 && back == false) {
    x++;
    if(x==700)
    	back=true;
  }
  else {
    x--;
    if(x == 0)
    	back=false;
  }

};

let x = 0;
let back = false;
const rectangleColor = getRandomColor();
const strokeColor = getRandomColor();
const animation = window.setInterval(animateRectangle, 1);

window.onload = () => {
	draw();
	window.requestAnimationFrame(animateRectangle);

}

const draw = () => {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	drawTriangle(ctx);
	drawRectangle(ctx);
	drawCircle(ctx);	
};

const drawTriangle = (ctx) => {
  	ctx.fillStyle = getRandomColor();
    ctx.strokeStyle = getRandomColor();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(150, 70);
	ctx.lineTo(270, 120);
	ctx.lineTo(270, 30);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};


const drawRectangle = (ctx) => {

	ctx.fillStyle = getRandomColor();
	ctx.strokeStyle = getRandomColor();
	ctx.fillRect(405, 25, 100, 100);
	ctx.strokeRect(404, 24, 102, 102);
	ctx.stroke();
};

const drawCircle = (ctx) => {

	ctx.fillStyle = getRandomColor();
	ctx.strokeStyle = getRandomColor();
	ctx.beginPath();
    ctx.arc(680, 75, 55, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
};