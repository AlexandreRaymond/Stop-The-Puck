const goal = document.getElementsByClassName("goal");
class Engine {
  constructor(theRoot) {
    // const gameEngine = new Engine(document.getElementById("app"))
    this.root = theRoot;
    this.player = new Player(this.root);

    this.enemies = [];
    addBackground(this.root);
  }

  gameLoop = () => {
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();
    //enemy.js
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });

    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    while (this.enemies.length < MAX_ENEMIES) {
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    if (this.isPlayerDead()) {
      window.alert(`You made ${saves} saves!`);
      document.removeEventListener("keydown", keydownHandler);
      return;
    }

    setTimeout(this.gameLoop, 10);
  };

  isPlayerDead = () => {
    for (let i = 0; i < this.enemies.length; i++) {
      let enemyX = this.enemies[i].x;
      let enemyY = this.enemies[i].y;
      let playerX = this.player.x;
      let playerY = this.player.y;
      if (enemyY > GAME_HEIGHT + 10) {
        console.log("goal");
        let audio = new Audio("./images/Goal horn.mp3");
        audio.play();
        audio.volume = 0.05;
        return true;
      }
    }
    return false;
  };
}

// find a way to add whitebox instead of playerxY
// to "copy" this method into enemy.js
// instead of return
/*playerX < enemyX + ENEMY_WIDTH &&
        playerX + PLAYER_WIDTH > enemyX &&
        playerY < enemyY + ENEMY_HEIGHT &&
        PLAYER_HEIGHT + playerY > enemyY*/
