window.onload = () => {
	draw();
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
    ctx.moveTo(25, 70);
	ctx.lineTo(120, 120);
	ctx.lineTo(120, 30);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};


const drawRectangle = (ctx) => {

	ctx.fillStyle = getRandomColor();
	ctx.strokeStyle = getRandomColor();
	ctx.fillRect(200, 25, 100, 100);
	ctx.strokeRect(199, 24, 102, 102);
	ctx.stroke();
};

const drawCircle = (ctx) => {

	ctx.fillStyle = getRandomColor();
	ctx.strokeStyle = getRandomColor();
	ctx.beginPath();
    ctx.arc(400, 75, 55, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
};

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256),
  		g = Math.floor(Math.random() * 256),
   		b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};
