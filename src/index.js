import './styles/app.css';
import Game from './components/game';

let canvas = document.getElementById("canvas");
let settings = {
  width: window.innerWidth, /* CANVAS WIDTH */
  height: window.innerHeight, /* CANVAS HEIGHT */
  fps: 150, /* FRAMES PER SECOND */
  gravity: 1700, /* PIXELS / S^2 */
  dampening: 0.1 /* PERCENTAGE OF VELOCITY LOSS AFTER IMPACT */
}

let game = new Game(canvas, settings).init();

window.onload = () => {
  game.run();
}