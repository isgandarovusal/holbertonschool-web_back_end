const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  let content = fs.readFileSync(path, 'utf8');
  content = content.trim().split('\n').filter((line) => line.trim().length > 0);

  if (content.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const lines = content.slice(1);
  const students = {};

  lines.forEach((line) => {
    const fields = line.split(',');
    if (fields.length >= 4) {
      const firstname = fields[0].trim();
      const field = fields[3].trim();

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    }
  });

  const totalStudents = Object.values(students).reduce((sum, list) => sum + list.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const [field, list] of Object.entries(students)) {
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  }
}

module.exports = countStudents;
