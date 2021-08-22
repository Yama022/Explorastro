// Action types
export const FORM = 'FORM';
export const SAVE_EXPLORATION = 'SAVE_EXPLORATION';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_CREATE_EVENT = 'CHANGE_INPUT_CREATE_EVENT';
export const SUBMIT_FORM_UPDATE_EVENT = 'SUBMIT_FORM_UPDATE_EVENT';
export const GET_COORD = 'GET_COORD';
export const GET_EVENT_CREATED = 'GET_EVENT_CREATED';
export const SAVE_EVENT_CREATED = 'SAVE_EVENT_CREATED';
export const ON_CLICK_PUBLISHED = 'ON_CLICK_PUBLISHED';
export const EVENTS_CREATED = 'EVENTS_CREATED';
export const SUBMIT_FROM_CREATE_EVENT = 'SUBMIT_FROM_CREATE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const GET_EVENT_CREATED_LAST = 'GET_EVENT_CREATED_LAST';
export const SAVE_EVENT_CREATED_LAST = 'SAVE_EVENT_CREATED_LAST';

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

export const submitFormUpdateEvent = (value) => ({
  type: SUBMIT_FORM_UPDATE_EVENT,
  value,
});

export const getCoord = (value) => ({
  type: GET_COORD,
  value,
});

export const getEventCreated = () => ({
  type: GET_EVENT_CREATED,

});
export const saveEventcreated = (value) => ({
  type: SAVE_EVENT_CREATED,
  value,

});

export const OnclickPublished = () => ({
  type: ON_CLICK_PUBLISHED,

});

export const eventsCreated = (value) => ({
  type: EVENTS_CREATED,
  value,

});

export const submitFormCreateEvent = () => ({
  type: SUBMIT_FROM_CREATE_EVENT,

});

export const removeEvent = (value) => ({
  type: REMOVE_EVENT,
  value,

});

export const getEventCreatedlast = (value) => ({
  type: GET_EVENT_CREATED_LAST,
  value,

});

export const saveEventcreatedlast = (value) => ({
  type: SAVE_EVENT_CREATED_LAST,
  value,

});
