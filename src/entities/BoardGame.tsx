
export enum CellStatusEnum {
    CROSSED,
    BLANK,
    FILLED,
}

export interface Item {
    isFilled: boolean;
    status?: CellStatusEnum
}

export interface BoardGame {
    cells: Item[][];
}

