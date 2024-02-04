const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    draw(e); // Start drawing immediately
}

function draw(e) {
    if (!isDrawing) return;

    const color = document.getElementById('color').value;
    const brushSize = document.getElementById('brushSize').value;

    context.lineWidth = brushSize;
    context.lineCap = 'round';
    context.strokeStyle = color;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function stopDrawing() {
    isDrawing = false;
    context.beginPath(); // Start a new path for the next stroke
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
