// This guy will calculate and execute every move
export default class Brain {

  constructor(deltaTime, { width, height }) {
    this.dt = deltaTime;
    this.g = 980;
    this.maxWidth = width;
    this.maxHeight = height;
  }

  move(objects) {

    for (let obj of objects) {
      
      if (!obj.isAlive) {
        continue;
      }

      // verify if ball is on a canvas limit
      if (obj.x - obj.radius < 0) {

        obj.vx = changeVelocity(obj.vx);
        obj.x = obj.radius + 1;

      } else if (obj.x + obj.radius > this.maxWidth) {

        obj.vx = changeVelocity(obj.vx);
        obj.x = this.maxWidth - obj.radius;
      }

      if (obj.y - obj.radius < 0) {

        obj.vy = changeVelocity(obj.vy);
        obj.y = obj.radius + 1;

      } else if (obj.y + obj.radius > this.maxHeight) {

        if (Math.abs(obj.vy) < 100 && Math.abs(obj.vx) < 150) {
          obj.isAlive = false;
        }

        obj.vy = changeVelocity(obj.vy);
        obj.y = this.maxHeight - obj.radius;
      }

      // calculate dt dependent variables
      obj.x += obj.vx * this.dt;
      obj.y += obj.vy * this.dt - 0.5 * this.g * Math.pow(this.dt, 2);
      obj.vy += this.g * this.dt;
    }
  }
}

/*************************************/
/******** HELPER FUNCTIONS ***********/
/*************************************/

function changeVelocity(vel) {
  const LOSS = 0.3; // should be 0.1, but 0.3 is a better replica
  return -vel * (1 - LOSS);
}