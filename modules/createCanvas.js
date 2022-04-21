import { Game } from './game.js';
import { View } from './view.js';

const game = new Game();
const view = new View(document.querySelector('.container'));

export const SIZE_BLOCK = 30;
export const COLUMNS = 10;
export const ROWS = 20;

const createCanvas = () => {
  //Step1: move figure
  window.addEventListener('keydown', e => {
    const key = e.code;

    switch (key) {
      case 'ArrowLeft':
        game.moveLeft();
        view.querySelectorshowArea(game.viewArea);
        break;
      case 'ArrowRight':
        game.moveRight();
        view.querySelectorshowArea(game.viewArea);
        break;
      case 'ArrowDown':
        game.moveDown();
        view.querySelectorshowArea(game.viewArea);
        break;
      case 'ArrowUp':
        game.rotateTetromino();
        view.querySelectorshowArea(game.viewArea);
        break;
    }
  });

  view.init();
  view.showArea(game.viewArea);
};

export default createCanvas;