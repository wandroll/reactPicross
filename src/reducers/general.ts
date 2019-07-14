import { Action } from 'redux';

export interface GeneralState {
  bob: boolean;
}

export const generalDefaultState: GeneralState = {
  bob: true,
};

export const generalReducer = (
  state: GeneralState = generalDefaultState,
  action: Action
): GeneralState => {
  switch (action.type) {
    default:
      return state;
  }
};
