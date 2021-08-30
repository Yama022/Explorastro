// Action types
export const SAVE_EXPLORATION = 'SAVE_EXPLORATION';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_VALUE_EXPLORATION = 'CHANGE_INPUT_VALUE_EXPLORATION';
export const SUBMIT_FORM_UPDATE_EVENT = 'SUBMIT_FORM_UPDATE_EVENT';
export const GET_COORD = 'GET_COORD';
export const GET_USER_EVENTS = 'GET_USER_EVENTS';
export const SAVE_USER_EVENTS = 'SAVE_USER_EVENTS';
export const GET_EVENT_TO_MODIFY_DATA = 'GET_EVENT_TO_MODIFY_DATA';
export const SAVE_EVENT_TO_MODIFY = 'SAVE_EVENT_TO_MODIFY';
export const ON_CLICK_PUBLISH = 'ON_CLICK_PUBLISHED';
export const ADD_NEW_EXPLORATION = "ADD_NEW_EXPLORATION";
export const SUBMIT_FROM_CREATE_EVENT = 'SUBMIT_FROM_CREATE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const GET_EVENT_CREATED_LAST = 'GET_EVENT_CREATED_LAST';
export const SAVE_EVENT_CREATED_LAST = 'SAVE_EVENT_CREATED_LAST';
export const REMOVE_LAST_EVENT_ID = 'REMOVE_LAST_EVENT_ID';
export const CLICK_MODAL = 'CLICK_MODAL';
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const SAVE_ALL_EVENTS = 'SAVE_ALL_EVENTS';
export const FORM_SUBMIT_SEARCH_ADDRESS = 'FORM_SUBMIT_SEARCH_ADDRESS';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';
export const GET_EXPLORATION_BY_ID = 'GET_EXPLORATION_BY_ID';
export const SAVE_EXPLORATION_BY_ID = 'SAVE_EXPLORATION_BY_ID';
export const REMOVE_OLD_STATE_EXPLORATION = 'REMOVE_OLD_STATE_EXPLORATION';

// Action creators
export const formSubmitSearchAddress = (payload) => ({
  type: FORM_SUBMIT_SEARCH_ADDRESS,
  payload,
});

export const changeInput = (payload) => ({
  type: CHANGE_INPUT,
  payload,
});

export const changeInputValue = (value, key) => ({
  type: CHANGE_INPUT_VALUE_EXPLORATION,
  value,
  key,
});

export const submitFormUpdateEvent = (value) => ({
  type: SUBMIT_FORM_UPDATE_EVENT,
  value,
});

export const getCoord = (value) => ({
  type: GET_COORD,
  value,
});

export const getUserEvents = () => ({
  type: GET_USER_EVENTS,
});

export const saveUserEvents = (value) => ({
  type: SAVE_USER_EVENTS,
  value,
});

export const getEventToModifyData = (payload) => ({
  type: GET_EVENT_TO_MODIFY_DATA,
  payload,
});

export const saveEventToModify = (payload) => ({
  type: SAVE_EVENT_TO_MODIFY,
  payload,
});

export const onClickPublished = () => ({
  type: ON_CLICK_PUBLISH,
});

export const removeEvent = (payload) => ({
  type: REMOVE_EVENT,
  payload,
});

export const submitFormCreateEvent = () => ({
  type: SUBMIT_FROM_CREATE_EVENT,
});

export const addNewExploration = (payload) => ({
  type: ADD_NEW_EXPLORATION,
  payload,
});

export const clickModal = () => ({
  type: CLICK_MODAL,
});

export const getAllEvents = () => ({
  type: GET_ALL_EVENTS,
});

export const saveAllEvents = (value) => ({
  type: SAVE_ALL_EVENTS,
  value,
});

export const updateEvents = (value) => ({
  type: UPDATE_EVENTS,
  value,
});

export const getExplorationById = (payload) => ({
  type: GET_EXPLORATION_BY_ID,
  payload,
});

export const saveExplorationById = (payload) => ({
  type: SAVE_EXPLORATION_BY_ID,
  payload,
});

export const removeOldStateExploration = () => ({
  type: REMOVE_OLD_STATE_EXPLORATION,
});
