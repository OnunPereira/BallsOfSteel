import Painter from "./objects/painter";
import Brain from "./objects/brain";
import Ball from "./objects/ball";
import './styles/app.css';

const canvas = document.getElementById("canvas");

var gameObjects = [];

window.onload = () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const FPS = 120;
  const INTERVAL = 1 / FPS; /* in seconds */

  const brain = new Brain(INTERVAL, canvas);
  const painter = new Painter(canvas);

  setInterval(() => {
    brain.move(gameObjects);
    painter.draw(gameObjects);
  }, INTERVAL * 1000 /* in milliseconds */);

  canvas.addEventListener("click", createBall);
}

/*************************************/
/******** HELPER FUNCTIONS ***********/
/*************************************/

function createBall(event) {
  const { x, y } = getMousePosition(event);
  const ball = new Ball(x, y);
  gameObjects.push(ball);
}

function getMousePosition(event) {
  const rect = canvas.getBoundingClientRect();
  const root = document.documentElement;
  const mouseX = event.clientX - rect.left - root.scrollLeft;
  const mouseY = event.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}