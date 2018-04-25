import Ball from '../src/objects/ball';
import expect from 'expect';
import Brain from '../src/objects/brain';

const brain = new Brain({
  width: 600,
  height: 400,
  gravity: 10,
  fps: 1,
  velocityLoss: 0.1
});

describe("Move ball", () => {

  const ball = new Ball(100, 100);

  it("should move right", () => {
    ball.vx = 10;
    ball.vy = 0;

    brain.move(ball).expect(ball.x).toBe(110);
  });
});

describe("Check limits", () => {
  
  describe("check horizontally", () => {
    it("")
  });
  
  describe("check vertically", () => {
    it("")
  });
});