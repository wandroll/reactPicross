import React from 'react';
import classNames from 'classnames';
import { Item } from '../../entities/BoardGame';

import styles from './Cell.module.scss';

export interface BoardProps {
  item: Item;
}

const Cell = ({ item }: BoardProps) => (
  <td
    role="image"
    className={classNames(styles.cell, { [styles.filled]: item.isFilled })}
  />
);

export default Cell;
