export class Controller {
  constructor(game, view) {
    this.game = game;
    this.view = view;
  }

  init(codeKey) {
    window.addEventListener('keydown', e => {
      if (e.code === codeKey) {
        this.view.removePreview();
        this.view.init();
        this.start();
      }
    })
  }

  start() {
    //show fogure after Enter
    this.view.showArea(this.game.viewArea);

    //start figures falling
    setInterval(() => {
      this.game.moveDown();
      this.view.showArea(this.game.viewArea);
    }, 700)

    //Step1: move figure
    window.addEventListener('keydown', e => {
      const key = e.code;

      switch (key) {
        case 'ArrowLeft':
          this.game.moveLeft();
          this.view.showArea(this.game.viewArea);
          break;
        case 'ArrowRight':
          this.game.moveRight();
          this.view.showArea(this.game.viewArea);
          break;
        case 'ArrowDown':
          this.game.moveDown();
          this.view.showArea(this.game.viewArea);
          break;
        case 'ArrowUp':
          this.game.rotateTetromino();
          this.view.showArea(this.game.viewArea);
          break;
      }
    });

  }
}