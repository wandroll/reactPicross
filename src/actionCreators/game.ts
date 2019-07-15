
import { ActionsUnion } from '@martin_hotell/rex-tils';
import { TOGGLE_FILL_CELL } from "../actionTypes";

export const toggleCell = (rowIndex: number, itemIndex: number) => ({
  type: TOGGLE_FILL_CELL,
  payload: {
    rowIndex,
    itemIndex
  }
});

const ActionsCreators = {
    toggleCell,
}

export type Actions = ActionsUnion<typeof ActionsCreators>;