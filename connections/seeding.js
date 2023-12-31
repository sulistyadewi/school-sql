const pool = require("./connection");
const fs = require("fs");

const students = JSON.parse(fs.readFileSync("./dataStudent.json", "utf-8"));
const teachers = JSON.parse(fs.readFileSync("./dataTeacher.json", "utf-8"));
const mapels = JSON.parse(fs.readFileSync("./dataMapel.json", "utf-8"));

// console.log(students);
dataStudents = [];
for (let i = 0; i < students.length; i++) {
  dataStudents.push(
    `( '${students[i].first_name}', '${students[i].last_name}', '${students[i].email}', '${students[i].gender}', '${students[i].birth_date}' )`
  );
}

dataTeachers = [];
for (let i = 0; i < teachers.length; i++) {
  dataTeachers.push(
    `( '${teachers[i].first_name}', '${teachers[i].last_name}', '${teachers[i].email}', '${teachers[i].gender}' )`
  );
}

dataMapels = [];
for (let i = 0; i < mapels.length; i++) {
  dataMapels.push(`( '${mapels[i].mapel}' )`);
}

// console.log(dataStudents);
// console.log(dataStudents.join("-"));

const studentInsert = `INSERT INTO "Students" ("first_name", "last_name", "email", "gender", "birth_date") VALUES ${dataStudents.join(
  ","
)}`;

const teacherInsert = `INSERT INTO "Teachers" ("first_name", "last_name", "email", "gender") VALUES ${dataTeachers.join(
  ","
)}`;

const mapelInsert = `INSERT INTO "Mapels" ("mapel") VALUES ${dataMapels.join(
  ","
)}`;

pool.query(studentInsert, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Insert table student successfully");
    pool.query(teacherInsert, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Insert table teacher successfully");
        pool.query(mapelInsert, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Insert table mapel successfully");
            pool.end();
          }
        });
      }
    });
  }
});
