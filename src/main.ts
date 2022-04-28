import "./style.css";
import p5 from "p5";
import Ball from "./Ball";
import Player from "./Player";

const sketch = (p: p5) => {
  const ball = new Ball({ p });
  const player = new Player({ p, x: 20, y: 225, upKey: "w", downKey: "s" });
  const player2 = new Player({ p, x: 400, y: 225, upKey: "o", downKey: "l" });

  p.setup = () => {
    p.createCanvas(450, 450);
  };

  p.draw = () => {
    p.background(0);
    ball.render();
    ball.move();
    ball.borderBounce();

    player.render();
    checkCollision(player);

    player2.render();
    checkCollision(player2);
  };

  p.keyPressed = () => {
    player.move();
    player2.move();
  };

  function checkCollision(player: Player) {
    if (
      ball.getX() >= player.getX() - player.getWidth() / 2 &&
      ball.getX() <= player.getX() + player.getWidth() / 2 &&
      ball.getY() >= player.getY() - player.getHeight() / 2 &&
      ball.getY() <= player.getY() + player.getHeight() / 2
    ) {
      ball.bounce();
    }
  }
};

new p5(sketch);
