import { Game } from './game.js';

const game = new Game();

const createCanvas = () => {
  const SIZE_BLOCK = 30;
  const COLUMNS = 10;
  const ROWS = 20
  const container = document.querySelector('.container');

  const colors = {
    J: 'DarkCyan',
    I: 'MediumVioletRed',
    O: 'Cyan',
    L: 'Green',
    2: 'Salmon',
    T: 'BlueViolet',
    S: 'Chocolate'
  };

  const canvas = document.createElement('canvas');
  canvas.classList.add('game-area');
  container.append(canvas);

  canvas.width = SIZE_BLOCK * COLUMNS;
  canvas.height = SIZE_BLOCK * ROWS;

  //need to create the context for canvas
  const context = canvas.getContext('2d');

  const showArea = area => {
    //Step2:clear figure's step
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < area.length; y++) {
      const line = area[y];

      for (let x = 0; x < line.length; x++) {
        const block = line[x];

        if (block !== 'o') {
          context.fillStyle = colors[block]; //background
          context.strokeStyle = 'white'; //border
          context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK); //background
          context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK); //border
        }
      }
    }
  };

  //Step1: move figure
  window.addEventListener('keydown', e => {
    const key = e.code;

    switch (key) {
      case 'ArrowLeft':
        game.moveLeft();
        showArea(game.viewArea);
        break;
      case 'ArrowRight':
        game.moveRight();
        showArea(game.viewArea);
        break;
      case 'ArrowDown':
        game.moveDown();
        showArea(game.viewArea);
        break;
      case 'ArrowUp':
        game.rotateTetromino();
        showArea(game.viewArea);
        break;
    }
  });

  showArea(game.viewArea);
};

export default createCanvas;