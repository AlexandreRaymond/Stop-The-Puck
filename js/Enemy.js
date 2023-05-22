let enemyposition;
let saves = 0;
class Enemy {
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;

    this.x = enemySpot * ENEMY_WIDTH;

    this.y = -ENEMY_HEIGHT;
    this.destroyed = false;

    this.domElement = document.createElement("img");

    this.domElement.src = "./images/image1.jpg";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;

    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 1.75 + 0.5;
  }

  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;
    enemyposition = this.y + ENEMY_HEIGHT;
    console.log(saves);
    if (
      playerposition === this.domElement.style.left &&
      enemyposition >= GAME_HEIGHT - PLAYER_HEIGHT
    ) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
      saves += 1;
      document.querySelector(".goal").innerText = `Saves: ${saves}`;
    }
  }
}

/*playerposition < enemyX + ENEMY_WIDTH &&
        playerX + PLAYER_WIDTH > enemyX &&
        playerY < enemyY + ENEMY_HEIGHT &&
        PLAYER_HEIGHT + playerY > enemyY
        */
