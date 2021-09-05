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
export const ON_CLICK_PUBLISH = 'ON_CLICK_PUBLISH';
export const ADD_NEW_EXPLORATION = 'ADD_NEW_EXPLORATION';
export const SUBMIT_FROM_CREATE_EVENT = 'SUBMIT_FROM_CREATE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const GET_EVENT_CREATED_LAST = 'GET_EVENT_CREATED_LAST';
export const SAVE_EVENT_CREATED_LAST = 'SAVE_EVENT_CREATED_LAST';
export const CLICK_MODAL = 'CLICK_MODAL';
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const SAVE_ALL_EVENTS = 'SAVE_ALL_EVENTS';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';
export const GET_EXPLORATION_BY_ID = 'GET_EXPLORATION_BY_ID';
export const SAVE_EXPLORATION_BY_ID = 'SAVE_EXPLORATION_BY_ID';
export const REMOVE_OLD_STATE_EXPLORATION = 'REMOVE_OLD_STATE_EXPLORATION';
export const UPLOAD_EXPLORATION_ILLUSTRATION = 'UPLOAD_EXPLORATION_ILLUSTRATION';
export const SAVE_EXPLORATION_ILLUSTRATION = 'SAVE_EXPLORATION_ILLUSTRATION';
export const POST_COMMENT = 'POST_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const SET_COMMENT_ID_VALUE = 'SET_COMMENT_ID_VALUE';
export const SET_COMMENT_EDIT_VALUE = 'SET_COMMENT_EDIT_VALUE';
export const CHANGE_VALUE_COMMENT = 'CHANGE_VALUE_COMMENT';
export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
export const NEW_PARTICIPANT = 'NEW_PARTICIPANT';
export const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT';
export const HANDLE_TOGGLE_COMM_EDIT = 'HANDLE_TOGGLE_COMM_EDIT';
export const SET_FORM_EVENT_FIELDS_HAS_ERROR = 'SET_FORM_EVENT_FIELDS_HAS_ERROR';
export const CHANGE_INPUT_NEW_EVENT = 'CHANGE_INPUT_NEW_EVENT';

export const changeInput = (payload) => ({
  type: CHANGE_INPUT,
  payload,
});

export const changeInputValue = (value, key) => ({
  type: CHANGE_INPUT_VALUE_EXPLORATION,
  value,
  key,
});

export const changeNewEventInputValue = (value, key) => ({
  type: CHANGE_INPUT_NEW_EVENT,
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

export const onClickPublish = () => ({
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

export const updateEvents = (removedEvent, removedParticipate) => ({
  type: UPDATE_EVENTS,
  removedEvent,
  removedParticipate,
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

export const uploadExplorationIllustration = (value, id) => ({
  type: UPLOAD_EXPLORATION_ILLUSTRATION,
  value,
  id,
});

export const saveExplorationIllustration = (payload) => ({
  type: SAVE_EXPLORATION_ILLUSTRATION,
  payload,
});

export const postComment = () => ({
  type: POST_COMMENT,
});

export const removeComment = (value) => ({
  type: REMOVE_COMMENT,
  value,
});

export const editComment = () => ({
  type: EDIT_COMMENT,
});

export const handleToggleCommEdit = () => ({
  type: HANDLE_TOGGLE_COMM_EDIT,
});

export const setCommentEditValue = (value) => ({
  type: SET_COMMENT_EDIT_VALUE,
  value,
});

export const setCommentIdValue = (value) => ({
  type: SET_COMMENT_ID_VALUE,
  value,
});

export const changeValueComment = (value, key) => ({
  type: CHANGE_VALUE_COMMENT,
  value,
  key,
});

export const addParticipant = (payload) => ({
  type: ADD_PARTICIPANT,
  payload,
});

export const newParticipant = () => ({
  type: NEW_PARTICIPANT,
});

export const removeParticipant = () => ({
  type: REMOVE_PARTICIPANT,
});

export const setFormEventFielsHasErrors = (payload) => ({
  type: SET_FORM_EVENT_FIELDS_HAS_ERROR,
  payload,
});
