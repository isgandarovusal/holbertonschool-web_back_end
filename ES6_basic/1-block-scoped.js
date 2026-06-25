export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = 'is any';

  if (trueOrFalse) {
    const task = true;
    const task2 = 'is none';
    if (task === task2) return [task, task2];
  }

  return [task, task2];
}
