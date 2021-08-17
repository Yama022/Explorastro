// Action types
export const FORM = 'FORM';
export const SAVE_EXPLORATION = 'SAVE_EXPLORATION';
export const CHANGE_INPUT = 'CHANGE_INPUT';
// Action creators
export const formSubmit = (payload) => ({
  type: FORM,
  payload,
});

export const changeInput = (payload) => ({
  type: CHANGE_INPUT,
  payload,
});
