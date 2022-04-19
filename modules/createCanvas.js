import game from '/modules/gameLogic.js';

const createCanvas = () => {
  const SIZE_BLOCK = 30;
  const container = document.querySelector('.container');

  const canvas = document.createElement('canvas');
  canvas.classList.add('game-area');
  container.append(canvas);

  canvas.width = SIZE_BLOCK * 10;
  canvas.height = SIZE_BLOCK * 20;

  //need to create the context for canvas
  const context = canvas.getContext('2d');

  const showArea = area => {
    for (let y = 0; y < area.length; y++) {
      const line = area[y];

      for (let x = 0; x < line.length; x++) {
        const block = line[x];

        if (block === 'x') {
          context.fillStyle = 'tomato'; //background
          context.strokeStyle = 'white'; //border
          context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK); //background
          context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK); //border
        }
      }
    }
  };

  showArea(game.area);
};

export default createCanvas;