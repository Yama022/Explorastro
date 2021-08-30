export default function findEventByName(events, searchedName) {
  const event = events.find((element) => (
    element.name === searchedName));
  return event;
}
