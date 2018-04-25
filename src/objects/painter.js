export default class Painter {

  constructor(canvas) {
    this.c = canvas;
    this.ctx = canvas.getContext('2d');
  }

  /**
   * Clears canvas and draws every active Ball object on the Balls array.
   * This method is executed every frame.
   * 
   * @param {[Balls]} balls 
   * @memberof Painter
   */
  draw(balls) {
    this.clearCanvas();
    for (let ball of balls) {
      if (ball.isActive) {
        this.drawBall(ball);
      }
    }
  }

  clearCanvas() {
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(0, 0, this.c.width, this.c.height);
  }

  drawBall({ x, y, radius, color }) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }
}