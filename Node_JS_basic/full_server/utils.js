import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const content = data.trim().split('\n').filter((line) => line.trim().length > 0);

      if (content.length <= 1) {
        resolve({});
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

      resolve(students);
    });
  });
}

export default readDatabase;
