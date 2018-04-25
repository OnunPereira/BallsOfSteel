import './styles/app.css';
import Game from './objects/game';

let canvas = document.getElementById("canvas");
let settings = {
  width: window.innerWidth, /* CANVAS WIDTH */
  height: window.innerHeight, /* CANVAS HEIGHT */
  fps: 240, /* FRAMES PER SECOND */
  gravity: 2400, /* PIXELS / S^2 */
  dampening: 0.1 /* PERCENTAGE OF VELOCITY LOSS AFTER IMPACT */
}

let game = new Game(canvas, settings).init();

window.onload = () => {
  game.run();
}