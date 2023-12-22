const pool = require("./connection");
const fs = require("fs");

const students = JSON.parse(fs.readFileSync("./dataStudent.json", "utf-8"));

// console.log(students);
dataStudents = [];
for (let i = 0; i < students.length; i++) {
  dataStudents.push(
    `( '${students[i].first_name}', '${students[i].last_name}', '${students[i].email}', '${students[i].gender}', '${students[i].birth_date}' )`
  );
}

console.log(dataStudents);
