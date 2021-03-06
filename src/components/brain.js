export default class Brain {

  constructor({ width, height, gravity, fps, dampening }) {
    this.w = width;
    this.h = height;
    this.dt = 1/fps;
    this.g = gravity;
    this.velocityKept = 1 - dampening;
    this.minVelocity = (gravity/fps) * (2/dampening);
  }

  /**
   * Calculates the movement of given array of Ball objects.
   * This method is executed every frame.
   * 
   * @param {[Ball]} balls 
   * @memberof Brain
   */
  moveAll(balls) {

    for (let ball of balls) {
      
      if (ball.active) {
        this.move(ball);
        this.checkHorizontalLimits(ball);
        this.checkVerticalLimits(ball);
        ball.active = this.isActive(ball);
      }
    }
  }

  /**
   * Calculates the laws of motion for the given Ball object in a determined time interval.
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
   * Checks if ball has passed horizontal limits.
   * If so, fixes ball X coordinate and changes velocity.
   * 
   * @param {Ball} ball 
   * @memberof Brain
   */
  checkHorizontalLimits(ball) {

    if (ball.x <= ball.radius || ball.x + ball.radius > this.w) {

      ball.vx *= -this.velocityKept;
      ball.x = ball.x < ball.radius ? ball.radius : this.w - ball.radius;
    }
  }

  /**
   * Checks if ball has passed vertical limits.
   * If so, fixes ball Y coordinate and changes velocity.
   * 
   * @param {any} ball 
   * @memberof Brain
   */
  checkVerticalLimits(ball) {

    if (ball.y <= ball.radius || ball.y + ball.radius > this.h) {

      ball.vy *= -this.velocityKept;
      ball.y = ball.y < ball.radius ? ball.radius : this.h - ball.radius;
    }
  }
  
  /**
   * Checks if ball is on the ground and if its absolute velocity is lower than minimum accepted velocity.
   * 
   * @param {Ball} ball 
   * @returns {Boolean}
   * @memberof Brain
   */
  isActive(ball) {

    let absVelocity = Math.sqrt(Math.pow(ball.vx, 2) + Math.pow(ball.vy, 2));
    return absVelocity > this.minVelocity || ball.y !== this.h - ball.radius;
  }
}