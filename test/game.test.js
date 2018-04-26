import Game from "../src/components/game";
import canvas from 'jest-canvas-mock';

console.log(canvas);

const game = new Game(canvas, {
  width: 600,
  height: 400,
  gravity: 10,
  fps: 1,
  dampening: 0.1
})

test("Creates Ball and adds it to Balls array", () => {
  game.createBall({ x: 100, y: 100 });
  expect(game.balls).toHaveLength(1);
  expect(game.balls[0]).toBeInstanceOf("Ball");
});