import Ball from '../src/components/ball';
import Brain from '../src/components/brain';

const brain = new Brain({
  width: 600,
  height: 400,
  gravity: 10,
  fps: 1,
  dampening: 0.1
});

test("Move ball", () => {

    const ball = new Ball(100, 100);
    ball.vx = 10;
    ball.vy = 10;
    brain.move(ball);

    expect(ball.x).toBe(110);
    expect(ball.vy).toBe(20);
    expect(ball.y).toBe(115);
});

test("check left border", () => {

  const ball = new Ball(30, 100);
  ball.radius = 50;
  ball.vx = -10;
  ball.vy = 0;
  brain.checkHorizontalLimits(ball);

  expect(ball.x).toBe(ball.radius);
  expect(ball.vx).toBe(9);
});

test("check top border", () => {

  const ball = new Ball(100, 30);
  ball.radius = 50;
  ball.vx = 0;
  ball.vy = -10;
  brain.checkVerticalLimits(ball);

  expect(ball.y).toBe(ball.radius);
  expect(ball.vy).toBe(9);
});

test("check right border", () => {

  const ball = new Ball(570, 100);
  ball.radius = 50;
  ball.vx = 10;
  ball.vy = 0;
  brain.checkHorizontalLimits(ball);

  expect(ball.x).toBe(brain.w - ball.radius);
  expect(ball.vx).toBe(-9);
});

test("check bottom border", () => {

  const ball = new Ball(100, 570);
  ball.radius = 50;
  ball.vx = 0;
  ball.vy = 10;
  brain.checkVerticalLimits(ball);

  expect(ball.y).toBe(brain.h - ball.radius);
  expect(ball.vy).toBe(-9);
});

test("inactive ball", () => {

  const ball = new Ball(100, 350);
  ball.radius = 50;
  ball.vx = 0;
  ball.vy = 0;

  expect(brain.isActive(ball)).toBeFalsy();
});