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

export function BacktrackSudoku(grid) {
  var filled = 0;
  for (var i = 0; i < 81; i++) {
    if (grid[i]) {
      filled ++;
    }
  }
  grid.push(filled);
  BacktrackRecursive(grid);
  filled = grid.pop();
  console.log(filled);
  return grid;
}

export function BacktrackRecursive(grid) {
  for (var i = 0; i < 81; i++) {
    if (!grid[i]) {
      for (var j = 1; j <= 9; j++){
        grid[i] = j;
        if (GridWorks(grid)) {
          grid[81]++;
          grid = BacktrackRecursive(grid);
          if (grid[81] == 81) {
            break;
          } else {
            grid[81]--;
          }
        }
      }
      if (grid[81] != 81) {
        grid[i] = 0;
      }
      break;
    }
  }
  return grid;
}
