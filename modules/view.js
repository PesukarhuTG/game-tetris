import { SIZE_BLOCK, COLUMNS, ROWS } from '../script.js';

export class View {
  constructor(container) {
    this.container = container;
    this.preview();
  }

  colors = {
    J: 'DarkCyan',
    I: 'MediumVioletRed',
    O: 'Cyan',
    L: 'Green',
    2: 'Salmon',
    T: 'BlueViolet',
    S: 'Chocolate'
  };

  canvas = document.createElement('canvas');

  //need to create the context for canvas
  context = this.canvas.getContext('2d');

  preview() {
    const div = document.createElement('div');
    div.classList.add('message');
    div.textContent = 'Press enter to start';
    this.container.append(div);
  }

  removePreview() {
    this.container.innerHTML = '';
  }

  init() {
    this.canvas.classList.add('game-area');
    this.container.append(this.canvas);

    this.canvas.width = SIZE_BLOCK * COLUMNS;
    this.canvas.height = SIZE_BLOCK * ROWS;
  }

  showArea(area) {
    //Step2:clear figure's step
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let y = 0; y < area.length; y++) {
      const line = area[y];

      for (let x = 0; x < line.length; x++) {
        const block = line[x];

        if (block !== 'o') {
          this.context.fillStyle = this.colors[block]; //background
          this.context.strokeStyle = 'white'; //border
          this.context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK); //background
          this.context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK); //border
        }
      }
    }
  };
}