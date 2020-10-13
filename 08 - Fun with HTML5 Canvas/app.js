const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function toggleDrawing() {
  arguments.length !== 0
    ? (isDrawing = arguments[0])
    : (isDrawing = !isDrawing);
  console.log('current isDrawing: ', isDrawing);
}

function draw(e) {
  if (isDrawing === false) {
    return;
  }

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();

  // start from
  ctx.moveTo(lastX, lastY);

  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  hue >= 360 ? (hue = 0) : hue;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', function (e) {
  toggleDrawing(true);
  lastX = e.offsetX;
  lastY = e.offsetY;

  console.log('pos: ', [lastX, lastY]);
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', function (e) {
  toggleDrawing(false);
});

canvas.addEventListener('mouseout', function (e) {
  toggleDrawing(false);
});
