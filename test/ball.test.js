import Ball from '../src/components/ball';

const ball = new Ball(0, 0);

test("Color Generator", () => {
  expect(ball.color).toMatch(/^#[a-fA-F0-9]{3,6}$/);
});

test("Random Generator", () => {
  expect(ball.radius).toBeGreaterThanOrEqual(25);
  expect(ball.radius).toBeLessThanOrEqual(50);
});