/* eslint-disable import/prefer-default-export */
export function findEvent(events, searchedId) {
  const idSearch = parseInt(searchedId, 10);
  const event = events.find((element) => (
    element.id === idSearch));

  return event;
}
