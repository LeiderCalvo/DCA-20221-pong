import p5 from "p5";

interface PlayerProps {
  p: p5;
  upKey: string;
  downKey: string;
  x: number;
  y: number;
}

class Player {
  p;
  x;
  y;
  step;
  upKey;
  downKey;
  width;
  height;

  constructor({ p, upKey, downKey, x, y }: PlayerProps) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.step = 5;
    this.upKey = upKey;
    this.downKey = downKey;
    this.width = 10;
    this.height = 80;
  }

  render() {
    this.p.rectMode(this.p.CENTER);
    this.p.rect(this.x, this.y, this.width, this.height);
  }

  goUp() {
    this.y -= this.step;
  }

  goDown() {
    this.y += this.step;
  }

  move() {
    if (
      this.p.key === this.upKey.toLowerCase() ||
      this.p.key === this.upKey.toUpperCase()
    ) {
      this.goUp();
    }

    if (
      this.p.key === this.downKey.toLowerCase() ||
      this.p.key === this.downKey.toUpperCase()
    ) {
      this.goDown();
    }
  }

  getWidth = () => this.width;
  getHeight = () => this.height;
  getX = () => this.x;
  getY = () => this.y;
}

export default Player;
