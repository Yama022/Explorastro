// eslint-disable-next-line import/prefer-default-export
export function filterExploration(sortie, value) {
  const Explorationfilter = sortie.filter((result) => (result.name.toLowerCase().includes(value.toLowerCase())));

  return Explorationfilter;
}
