// BALLS OF STEEEEEEL
export default class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = deltaGenerator(25, 50);
    this.vx = deltaGenerator(-1000, 1000);
    this.vy = deltaGenerator(-1000, 1000);
    this.color = colorGenerator();
    this.active = true;
  }
}

/*************************************/
/******** HELPER FUNCTIONS ***********/
/*************************************/

/**
 * Generates random Number (integer) between min and max.
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number} between min and max
 */
function deltaGenerator(min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}

/**
 * Generates random color from 4096 possible colors.
 * 
 * @returns {String} color
 */
function colorGenerator() {
  // Don't want 'F' because the canvas is already white
  const letters = '0123456789ABCDE';
  let color = '#';
  // 4096 colors are enough
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}