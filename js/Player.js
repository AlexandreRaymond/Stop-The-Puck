let playerposition = 3 * PLAYER_WIDTH + "px";
//let playerstart = 3 * PLAYER_WIDTH;

class Player {
  constructor(root) {
    this.x = 3 * PLAYER_WIDTH;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
    let playersize = (this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10);

    this.domElement = document.createElement("img");
    this.domElement.src = "images/image0.jpg";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = ` ${this.y}px`;
    this.domElement.style.zIndex = "10";
    root.appendChild(this.domElement);
  }

  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }

    this.domElement.style.left = `${this.x}px`;
    playerposition = this.domElement.style.left = `${this.x}px`;
  }

  moveRight() {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = `${this.x}px`;
    playerposition = this.domElement.style.left = `${this.x}px`;
  }
}
