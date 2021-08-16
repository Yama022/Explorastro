// Action types
export const FORM = 'FORM';
export const SAVE_EXPLORATIONS = 'SAVE_EXPLORATIONS';
export const SAVE_VILLE = 'SAVE_VILLE';

// Action creators
export const formSubmit = (payload) => {
  console.log(payload);
  return ({
    type: FORM,
    payload,
  });
};

export const saveExplorations = (payload) => ({
  type: SAVE_EXPLORATIONS,
  payload,
});

export const saveVille = (payload) => {
  console.log('eghredh');
  return ({
    type: SAVE_VILLE,
    payload,
  });
};
