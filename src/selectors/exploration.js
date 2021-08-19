/* eslint-disable import/prefer-default-export */
export function findEvent(events, searchedId) {
  const event = events.find((testedEvent) => testedEvent.id === searchedId);
  return event;
}
