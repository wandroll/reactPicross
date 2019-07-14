import React from 'react';
import { BoardGame } from '../../entities/BoardGame';
import Cell from '../Cell/Cell';
import { computeRowIndication, computeColumnIndication } from '../../services/boardHelper';
import styles from './Board.module.scss';

export interface BoardProps {
    boardGame: BoardGame;
}

const Board = ({ boardGame } : BoardProps)  => (
    <div className={styles.wrapper}>
        <table>
            <thead>
            <th/>
            {
                boardGame.cells.map((array, index, cells) => (
                    <th className={styles.vertical}>{computeColumnIndication(index)(cells)}</th>
                ))
            }
            </thead>
            <tbody>
            {
                boardGame.cells.map((row) => (
                    <tr>
                        <td className={styles.horizontal}>{computeRowIndication(row)}</td>
                        {
                            row.map((item) => (
                                <Cell item={item}/>
                            ))
                        }            
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
);

export default Board;