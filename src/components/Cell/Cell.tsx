import React from 'react';
import classNames from 'classnames';
import { Item, CellStatusEnum } from '../../entities/BoardGame';

import styles from './Cell.module.scss';

export interface BoardProps {
  item: Item;
  onToggle: () => void;
}

const Cell = ({ item, onToggle }: BoardProps) => (
  <td
    role="image"
    className={classNames(styles.cell, { [styles.filled]: item.status === CellStatusEnum.FILLED})}
    onClick={onToggle}
  />
);

export default Cell;
