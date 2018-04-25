export default class Brain {

  constructor({ width, height, gravity, fps, dampening }) {
    this.w = width;
    this.h = height;
    this.dt = 1/fps;
    this.g = gravity;
    this.vLoss = 1 - dampening;
    this.minVelocity = (gravity/fps) * (1/dampening);
  }

  /**
   * Calculates the movement of given array of Ball objects
   * 
   * @param {[Ball]} balls 
   * @memberof Brain
   */
  moveAll(balls) {

    for (let ball of balls) {
      
      if (ball.isActive) {
        this.move(ball);
        this.checkHorizontalLimits(ball);
        this.checkVerticalLimits(ball);
        this.checkBallInactive(ball);
      }
    }
  }

  /**
   * Calculates the laws of motion for the given Ball object in a determined time interval
   * 
   * @param {Ball} ball 
   * @memberof Brain
   */
  move(ball) {
    ball.x += ball.vx * this.dt;
    ball.vy += this.g * this.dt;
    ball.y += ball.vy * this.dt - 0.5 * this.g * Math.pow(this.dt, 2);
  }

  /**
   * Checks if ball has passed both horizontal limits.
   * If so, resets ball X coordinate and changes velocity
   * 
   * @param {Ball} ball 
   * @memberof Brain
   */
  checkHorizontalLimits(ball) {

    if (ball.x - ball.radius < 0) {

      ball.vx *= -this.vLoss;
      ball.x = ball.radius;

    } else if (ball.x + ball.radius > this.w) {

      ball.vx *= -this.vLoss;
      ball.x = this.w - ball.radius;
    }
  }

  /**
   * 
   * 
   * @param {any} ball 
   * @memberof Brain
   */
  checkVerticalLimits(ball) {

    if (ball.y - ball.radius < 0) {

      ball.vy *= -this.vLoss; // 1 - vLoss percent in the opposite direction
      ball.y = ball.radius;

    } else if (ball.y + ball.radius > this.h) {

      ball.vy *= -this.vLoss;
      console.log(ball.vy);
      ball.y = this.h - ball.radius;
    }
  }

  /**
   * 
   * 
   * @param {any} ball 
   * @memberof Brain
   */
  checkBallInactive(ball) {

    let totalVelocity = Math.sqrt(Math.pow(ball.vx, 2) + Math.pow(ball.vy, 2));

    if (totalVelocity < this.minVelocity && ball.y === this.h - ball.radius) {
      ball.isActive = false;
    }
  }
}