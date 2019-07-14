import { Item } from '../entities/BoardGame';
import { replaceAt } from './immutableHelper';
import { pipe, join } from 'ramda';

export interface Indication {
    value : number,
    isValid: boolean,
}
export const computeCellsIndication = (cells : Item[]) : number[] => {
    return reduceValuesToIndication(cells.map(cell => cell.isFilled));
}

export const arrayRow: <T>(n: number) => (arr:T[]) => T =
n  => arr => arr[n];

export const arrayColumn: <T>(n: number) => (arr:T[][]) => T[] =
    n  => arr => arr.map(x => x[n]);


export const computeColumnIndication: (index: number) => (cells: Item[][]) => string =
index => pipe(
   arrayColumn(index),
   computeCellsIndication,
   join(' '),
);

export const computeRowIndication: (row : Item[]) => string = 
pipe(
   computeCellsIndication,
   join(' '),
);


export const reduceValuesToIndication = (reduceValuesToIndication: boolean[]) : number[] => {
    return reduceValuesToIndication
        .reduce((acc, currentValue, currentIndex, cells) => {
        if(!currentValue) return acc;
        if (currentIndex === 0) return [1];
        const lastValue = cells[currentIndex -1];
        return lastValue ? 
            replaceAt(acc, acc.length -1, acc[acc.length -1] + 1) :  [ ...acc, 1 ];
    }, [] as number[])
}


export const updateIndication = (cells: Item []) : Indication[] => {
    
    return [];
}