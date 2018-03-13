export function NoNon0Repeats(numbers) {
  var used = new Array(9).fill(false);
  for (var i = 0; i <= numbers.length; i++) {
    if (numbers[i]) {
      if (used[numbers[i] - 1]) {
        return false;
      } else {
        used[numbers[i] - 1] = true;
      }
    }
  }
  return true;
}

export function GridWorks(grid) {
  for (var i = 0; i < 9 ; i++) {
    var hzArray = [], vtArray = [], boxArray = [];
    for (var j = 0; j < 9; j++) {
      hzArray.push(grid[9 * i + j]);
      vtArray.push(grid[9 * j + i]);
      boxArray.push(grid[j + (6 * Math.floor(j/3)) + (3 * i) + (18 * Math.floor(i/3))]);
    }
    if (!NoNon0Repeats(hzArray) || !NoNon0Repeats(vtArray) || !NoNon0Repeats(boxArray)){
      return false;
    }
  }
  return true;
}
