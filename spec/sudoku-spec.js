import { NoNon0Repeats, GridWorks, BacktrackSudoku } from '../src/sudoku';

describe('NoNon0Repeats', function() {
  it('should return true if sent a 0', function() {
    let testArray = [0];
    expect(NoNon0Repeats(testArray)).toEqual(true);
  });
});
describe('NoNon0Repeats', function() {
  it('should return true if sent a 1 through 9', function() {
    let testArray = [1,2,3,4,5,6,7,8,9];
    expect(NoNon0Repeats(testArray)).toEqual(true);
  });
});
describe('NoNon0Repeats', function() {
  it('should return false if sent a repeat', function() {
    let testArray = [1,3,3];
    expect(NoNon0Repeats(testArray)).toEqual(false);
  });
});
describe('NoNon0Repeats', function() {
  it('should return true if only 0s repeat', function() {
    let testArray = [1,0,0,4,6];
    expect(NoNon0Repeats(testArray)).toEqual(true);
  });
});
describe('GridWorks', function() {
  it('should return true if given an array of 81 zeros', function() {
    let testArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    expect(GridWorks(testArray)).toEqual(true);
  });
});
describe('GridWorks', function() {
  it('should return false if given an array with two repeated numbers in a row', function() {
    let testArray = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    expect(GridWorks(testArray)).toEqual(false);
  });
});
describe('GridWorks', function() {
  it('should return false if given an array with two repeated numbers in a column', function() {
    let testArray = [1,0,0,0,0,0,0,0,0, 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    expect(GridWorks(testArray)).toEqual(false);
  });
});
describe('GridWorks', function() {
  it('should return false if given an array with two repeated numbers in a box', function() {
    let testArray = [1,0,0,0,0,0,0,0,0, 0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    expect(GridWorks(testArray)).toEqual(false);
  });
});
describe('GridWorks', function() {
  it('should return true if given a working completed puzzle', function() {
    let testArray = [5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7, 8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6, 9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9];
    expect(GridWorks(testArray)).toEqual(true);
  });
});
describe('GridWorks', function() {
  it('should return false if given a puzzle with rows and columns correct but repeats in boxes', function() {
    let testArray = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9,1,2, 4,5,6,7,8,9,1,2,3,5,6,7,8,9,1,2,3,4,6,7,8,9,1,2,3,4,5, 7,8,9,1,2,3,4,5,6,8,9,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,8];
    expect(GridWorks(testArray)).toEqual(false);
  });
});
describe('BacktrackSudoku', function() {
  it('should return solved puzzle if sent a solvable puzzle', function() {
    let testArray = [5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9];
    expect(BacktrackSudoku(testArray)).toEqual([5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]);
  });
});
describe('BacktrackSudoku', function() {
  it('should return solved puzzle if sent another solvable puzzle', function() {
    let testArray = [0,2,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,3,0,7,4,0,8,0,0,0,0,0,0,0,0,0,3,0,0,2,0,8,0,0,4,0,0,1,0,6,0,0,5,0,0,0,0,0,0,0,0,0,1,0,7,8,0,5,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,4,0];
    expect(BacktrackSudoku(testArray)).toEqual([1,2,6,4,3,7,9,5,8,8,9,5,6,2,1,4,7,3,3,7,4,9,8,5,1,2,6,4,5,7,1,9,3,8,6,2,9,8,3,2,4,6,5,1,7,6,1,2,5,7,8,3,9,4,2,6,9,3,1,4,7,8,5,5,4,8,7,6,9,2,3,1,7,3,1,8,5,2,6,4,9]);
  });
});
