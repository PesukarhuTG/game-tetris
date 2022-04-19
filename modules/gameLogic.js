const game = {
  area: [
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x',],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x',],
    ['o', 'x', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'x',],
    ['x', 'x', 'x', 'o', 'x', 'x', 'o', 'o', 'o', 'x',],
  ],

  activeTetromino: {
    x: 3,
    y: 0,
    block: [
      ['o', 'x', 'o'],
      ['o', 'x', 'o'],
      ['x', 'x', 'o'],
    ]
  },

  moveLeft() {
    this.activeTetromino.x -= 1;
  },

  moveRight() {
    this.activeTetromino.x += 1;
  },

  moveDown() {
    this.activeTetromino.y -= 1;
  },

  rotateTetromino() {

  },

  get viewArea() {
    //copy our area and not change basic area
    const area = JSON.parse(JSON.stringify(this.area));

    //get out figure
    const { x, y, block } = this.activeTetromino;

    //add changes in new area, where we pass the figure
    for (let i = 0; i < block.length; i++) {
      const row = block[i];

      for (let j = 0; j < row.length; j++) {
        if (row[j] === 'x') {
          area[y + i][x + j] = block[i][j];
        }
      }
    }

    return area;
  },

};

export default game;