const pool = require("../connections/connection");

class Student {
  constructor(id, first_name, last_name, email, gender, birth_date) {
    (this.id = id),
      (this.first_name = first_name),
      (this.last_name = last_name),
      (this.email = email),
      (this.gender = gender),
      (this.birth_date = birth_date);
  }
  static showStudent(cb) {
    const getStudent = `SELECT * FROM "Students" ORDER BY id;`;
    pool.query(getStudent, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        const students = [];
        // console.log(res);
        for (let i = 0; i < res.rows.length; i++) {
          students.push(
            new Student(
              res.rows[i].id,
              res.rows[i].first_name,
              res.rows[i].last_name,
              res.rows[i].email,
              res.rows[i].gender,
              res.rows[i].birth_date
            )
          );
        }
        // console.log(students);
        cb(null, students);
      }
    });
  }
  static addStudent(objectStudent, cb) {
    let query = `INSERT INTO "Students" ("first_name", "last_name", "email", "gender", "birth_date") VALUES ('${objectStudent.first_name}', '${objectStudent.last_name}', '${objectStudent.email}', '${objectStudent.gender}', '${objectStudent.birth_date}')`;

    // console.log(query, objectStudent);

    pool.query(query, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res.rows);
      }
    });
  }
  static deleteData(id, cb) {
    // console.log(id);
    let query = `DELETE FROM "Students" WHERE id = ${id}`;
    pool.query(query, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res);
      }
    });
  }
  static editData(id, cb) {
    let query = `SELECT * FROM "Students" WHERE id = ${id}`;
    pool.query(query, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        // console.log(res.rows, "ini dari model");
        const student = new Student(
          res.rows[0].id,
          res.rows[0].first_name,
          res.rows[0].last_name,
          res.rows[0].email,
          res.rows[0].gender,
          res.rows[0].birth_date
        );
        // console.log(student, "ini student");
        cb(null, student);
      }
    });
  }
  static updateStudent(objectEditStudent, cb) {
    let query = `UPDATE "Students" SET "first_name" = '${objectEditStudent.first_name}', "last_name" = '${objectEditStudent.last_name}', "email" = '${objectEditStudent.email}', "gender" = '${objectEditStudent.gender}', "birth_date" = '${objectEditStudent.birth_date}' WHERE id = '${objectEditStudent.id}'`;
    console.log(objectEditStudent, "ini object");
    pool.query(query, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res.rows);
        console.log(res.rows, "ini res.rows");
      }
    });
  }
}

module.exports = Student;
