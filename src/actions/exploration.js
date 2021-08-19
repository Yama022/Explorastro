// Action types
export const FORM = 'FORM';
export const SAVE_EXPLORATION = 'SAVE_EXPLORATION';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_CREATE_EVENT = 'CHANGE_INPUT_CREATE_EVENT';
export const SUBMIT_FORM_CREATE_EVENT = 'SUBMIT_FORM_CREATE_EVENT';
export const GET_COORD = 'GET_COORD';

// Action creators
export const formSubmit = (payload) => ({
  type: FORM,
  payload,
});

export const changeInput = (payload) => ({
  type: CHANGE_INPUT,
  payload,
});

export const changeInputCreateEvent = (value, key) => ({
  type: CHANGE_INPUT_CREATE_EVENT,
  value,
  key,
});

export const submitFormCreateEvent = (value, key) => ({
  type: SUBMIT_FORM_CREATE_EVENT,
  value,
  key,
});

export const getCoord = (value) => ({
  type: GET_COORD,
  value,
});
