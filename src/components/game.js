import Brain from "./brain";
import Painter from "./painter";
import Ball from "./ball";

export default class Game {

  constructor(canvas, settings) {
    this.c = canvas;
    this.width = settings.width;
    this.height = settings.height;
    this.fps = settings.fps;
    this.balls = [];
    this.brain = new Brain(settings);
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

      let rect = this.c.getBoundingClientRect();
      let root = document.documentElement;

      let pos = {
        x: e.clientX - rect.left - root.scrollLeft,
        y: e.clientY - rect.top - root.scrollTop
      }

      this.createBall(pos);
    });

    return this;
  }

  /**
   * Every interval of milliseconds, delegates ball movement to the brain and tells the painter to draw them
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
   * Creates ball at given position with x and y coordinates
   * 
   * @param {Number} x 
   * @param {Number} y
   * @memberof Game
   */
  createBall({ x, y }) {
    this.balls.push(new Ball(x, y));
  }
}
