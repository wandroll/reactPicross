import { BoardGame } from "../entities/BoardGame";

export const boardsFixture = [
    [
        [ 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        [ 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
        [ 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        [ 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        [ 1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
        [ 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [ 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [ 1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
        [ 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [ 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
    ],
];


const rawDataToBoard = (rawData: number[][]):BoardGame => 
  ({ 
    cells : rawData.map(row =>
    row.map(value => ({ isFilled: (value === 1)}))
   )
  });

export const boardGame = rawDataToBoard(boardsFixture[0]);