export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const matchingValues = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      matchingValues.push(value.slice(startString.length));
    }
  });
  return matchingValues.join('-');
}
