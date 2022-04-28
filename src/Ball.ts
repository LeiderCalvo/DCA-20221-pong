import p5 from "p5";

interface BallProps {
  p: p5;
}

class Ball {
  p;
  x;
  y;
  radius;
  speed;
  direction;

  constructor({ p }: BallProps) {
    this.p = p;
    this.x = 200;
    this.y = 200;
    this.radius = 20;
    this.speed = 5;
    this.direction = -1;
  }

  render() {
    this.p.ellipseMode(this.p.CENTER);
    this.p.circle(this.x, this.y, this.radius);
  }

  move() {
    this.x += this.speed * this.direction;
  }

  borderBounce() {
    const rightBorder = 450 - this.radius;
    const leftBorder = this.radius;

    if (this.x > rightBorder || this.x < leftBorder) {
      this.bounce();
    }
  }

  bounce() {
    this.direction *= -1;
  }

  getX = () => this.x;
  getY = () => this.y;
}

export default Ball;
