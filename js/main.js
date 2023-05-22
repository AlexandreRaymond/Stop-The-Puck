const startGame = () => {
  const hideButton = document.getElementById("intro");
  hideButton.style.display = "none";
  let audio = new Audio("./images/Hockey organ.mp3");
  audio.play();
  audio.volume = 0.1;
  const gameEngine = new Engine(document.getElementById("app"));

  const keydownHandler = (event) => {
    if (event.code === "ArrowLeft") {
      gameEngine.player.moveLeft();
    }

    if (event.code === "ArrowRight") {
      gameEngine.player.moveRight();
    }
  };

  document.addEventListener("keydown", keydownHandler);

  gameEngine.gameLoop();
};
// look up how to create an audio file.
