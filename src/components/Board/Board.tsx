import React from 'react';
import { BoardGame } from '../../entities/BoardGame';
import Cell from '../Cell/Cell';
import {
  computeRowIndication,
  computeColumnIndication,
} from '../../services/boardHelper';
import styles from './Board.module.scss';

export interface BoardProps {
  boardGame: BoardGame;
  toggleCell: (i: number, j: number) => void;
}

const Board = ({ boardGame, toggleCell }: BoardProps) => (
  <div className={styles.wrapper}>
    <table>
      <thead>
        <th />
        {boardGame.cells.map((array, index, cells) => (
          <th className={styles.vertical}>
            {computeColumnIndication(index)(cells)}
          </th>
        ))}
      </thead>
      <tbody>
        {boardGame.cells.map((row, rowIndex) => (
          <tr>
            <td className={styles.horizontal}>{computeRowIndication(row)}</td>
            {row.map((item, itemIndex) => (
              <Cell key={itemIndex} item={item} onToggle={() => toggleCell(rowIndex, itemIndex)} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Board;
