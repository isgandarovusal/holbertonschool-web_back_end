/* eslint-disable no-unused-vars, prefer-const */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = 'is any';

  if (trueOrFalse) {
    let task = true;
    let task2 = 'is none';
  }

  return [task, task2];
}
