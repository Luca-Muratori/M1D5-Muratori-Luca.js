const matrixGenerator = function (x, y) {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      matrix.push(i.toString() + j.toString());
    }
  }
  let charsPerRow = matrix.length / y;
  for (let z = 0; z < y; z++) {
    console.log(matrix.slice(z * charsPerRow, (z + 1) * charsPerRow));
  }
};
matrixGenerator(5,5)