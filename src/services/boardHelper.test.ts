import { computeCellsIndication } from './boardHelper';
import { Item } from '../entities/BoardGame';

const prepareDataSet = (dataSet: number[]): Item[] =>
  dataSet.map(value => ({ isFilled: value === 1 }));

describe(' computeCellsIndication', () => {
  it('should return the indications for a list of cells', () => {
    const dataSet = [1, 0, 1, 0, 1, 1, 1, 1, 0, 1];
    const ecpectedOutput = [1, 1, 4, 1];

    expect(computeCellsIndication(prepareDataSet(dataSet))).toEqual(
      ecpectedOutput
    );
  });
});
