/* eslint-disable max-len */
// eslint-disable-next-line import/prefer-default-export
export function filterExploration(events, value) {
  const Explorationfilter = events.filter((result) => (result.name.toLowerCase().includes(value.toLowerCase())));
  return Explorationfilter;
}
