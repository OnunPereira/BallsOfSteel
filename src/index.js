import './styles/app.css';
import Game from './objects/game';

let canvas = document.getElementById("canvas");
let options = {
  width: window.innerWidth,
  height: window.innerHeight,
  fps: 120,
  gravity: 1500
}

let game = new Game(canvas, options).init();

window.onload = () => {
  game.run();
}