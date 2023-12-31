const modelStudent = require("../models/modelStudent");

class Controller {
  static showStudent(req, res) {
    modelStudent.showStudent((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.render("student", { data });
      }
    });
  }
  static formStudent(req, res) {
    res.render("addStudent");
  }
  static addStudent(req, res) {
    const { first_name, last_name, email, gender, birth_date } = req.body;
    const objectStudent = { first_name, last_name, email, gender, birth_date };
    // console.log(objectStudent);
    modelStudent.addStudent(objectStudent, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("/student");
      }
    });
  }
  static deleteStudent(req, res) {
    const id = +req.params.id;
    // console.log(id, "ini id");
    modelStudent.deleteData(id, (err, data) => {
      if (err) {
        res.render("err");
      } else {
        res.redirect("/student");
      }
    });
  }
  static editStudent(req, res) {
    const id = +req.params.id;
    // console.log(id);
    modelStudent.editData(id, (err, students) => {
      if (err) {
        res.render("err");
      } else {
        res.render("editStudent", { students });
      }
    });
  }
  static saveEdit(req, res) {
    const { first_name, last_name, email, gender, birth_date } = req.body;
    // const id = +req.params.id
    const objectEditStudent = {
      first_name,
      last_name,
      email,
      gender,
      birth_date,
    };

    modelStudent.updateStudent(objectEditStudent, (err, data) => {
      if (err) {
        res.render("err");
      } else {
        res.redirect("/student");
      }
    });
  }
}

module.exports = Controller;
