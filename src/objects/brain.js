export default class Brain {

  constructor(gravity, deltaTime, width, height) {
    this.g = gravity;
    this.dt = deltaTime;
    this.w = width;
    this.h = height;
  }

  moveAll(balls) {

    for (let ball of balls) {
      
      if (!ball.isActive) {
        continue;
      }

      // calculate dt dependent variables
      ball.x += ball.vx * this.dt;
      ball.y += ball.vy * this.dt - 0.5 * this.g * Math.pow(this.dt, 2);
      ball.vy += this.g * this.dt;

      // verify if ball is on a canvas limit
      if (ball.x - ball.radius < 0) {

        ball.vx = changeVelocity(ball.vx);
        ball.x = ball.radius + 1;

      } else if (ball.x + ball.radius > this.w) {

        ball.vx = changeVelocity(ball.vx);
        ball.x = this.w - ball.radius;
      }

      if (ball.y - ball.radius < 0) {

        ball.vy = changeVelocity(ball.vy);
        ball.y = ball.radius + 1;

      } else if (ball.y + ball.radius > this.h) {

        if (Math.abs(ball.vy) < 100 && Math.abs(ball.vx) < 150) {
          ball.isActive = false;
        }

        ball.vy = changeVelocity(ball.vy);
        ball.y = this.h - ball.radius;
      }
    }
  }

  move(ball) {
    
  }
}

/*************************************/
/******** HELPER FUNCTIONS ***********/
/*************************************/

function changeVelocity(vel) {
  const LOSS = 0.1; // should be 0.1, but 0.3 is a better replica
  return -vel * (1 - LOSS);
}