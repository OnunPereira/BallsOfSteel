import Painter from "./objects/painter";
import Brain from "./objects/brain";
import Ball from "./objects/ball";

const canvas = document.getElementById("canvas");

var gameObjects = [];

window.onload = () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const FPS = 120;
  const dt = 1000 / FPS; // in milliseconds
  const painter = new Painter(canvas);
  const brain = new Brain((1 / FPS), canvas);

  setInterval(() => {
    brain.move(gameObjects);
    painter.draw(gameObjects);
  }, dt);

  canvas.addEventListener("click", createBall);
}

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