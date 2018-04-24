// This guy will draw everything
export default class Painter {

  constructor(canvas) {
    this.c = canvas;
    this.ctx = this.c.getContext('2d');
  }

  draw(objects) {
    drawRect(0, 0, this.c.width, this.c.height, '#fff', this.ctx);
    for (let obj of objects) {
      if (obj.isAlive) {
        drawCircle(obj, this.ctx);
      }
    }
  }
}

/*************************************/
/******** HELPER FUNCTIONS ***********/
/*************************************/

function drawRect(x, y, w, h, color, ctx) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle({ x, y, radius, color }, ctx) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}