export default function getStudentIdsSum(students) {
  return students.reduce((accumulatedSum, student) => accumulatedSum + student.id, 0);
}
