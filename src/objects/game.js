import Brain from "./brain";
import Painter from "./painter";
import Ball from "./ball";

export default class Game {

  constructor(canvas, { width, height, fps, gravity }) {
    this.c = canvas;
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.balls = [];
    this.brain = new Brain(gravity, (1 / fps), width, height);
    this.painter = new Painter(canvas);
  }

  /**
   * Initializes Canvas related properties and methods
   * 
   * @returns the Game object itself
   * @memberof Game
   */
  init() {

    this.c.width = this.width;
    this.c.height = this.height;
    this.c.addEventListener("click", (e) => {
      let { x, y } = getMousePosition.call(this, e);
      this.createBall(x, y);
    });

    return this;
  }

  /**
   * Continuously delegates balls moveAllment to the brain and tells the painter to draw them
   * 
   * @memberof Game
   */
  run() {

    setInterval(() => {

      this.brain.moveAll(this.balls);
      this.painter.draw(this.balls);

    }, (1000/this.fps));
  }

  /**
   * Creates ball at given coordinates x and y
   * 
   * @param {Number} x 
   * @param {Number} y
   * @memberof Game
   */
  createBall(x, y) {
    this.balls.push(new Ball(x, y));
  }
}

/**
 * Helper function that retrieves mouse coordinates when event happens
 * 
 * @param {Event} event 
 * @returns Object with coordinates x and y
 */
function getMousePosition(event) {

  let rect = this.c.getBoundingClientRect();
  let root = document.documentElement;
  
  return {
    x: event.clientX - rect.left - root.scrollLeft,
    y: event.clientY - rect.top - root.scrollTop
  };
}