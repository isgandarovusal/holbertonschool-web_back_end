export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = 'is any';

  if (trueOrFalse) {
    var task = true;
    var task2 = 'is none';
  }

  return [task, task2];
}
