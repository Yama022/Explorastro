// Action types
export const FORM = 'FORM';
export const SAVE_SORTIE = 'SAVE_SORTIE';
// Action creators
export const formSubmit = (payload) => ({
  type: FORM,
  payload,
});
