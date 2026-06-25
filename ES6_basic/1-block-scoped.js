export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-shadow */
    let task = true;
    let task2 = false;
    /* eslint-enable no-shadow */
  }

  return [task, task2];
}
