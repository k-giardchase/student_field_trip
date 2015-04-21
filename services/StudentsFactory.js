studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function(newName) {
    this.students.push({name: newName, permissionSlip: false });
  };

  factory.deleteStudent = function(student) {
    var index = this.students.indexOf(student);
    this.students.splice(index, 1);
  };

  factory.updatePermSlip = function(student) {
    student.permissionSlip = true;
  };

  return factory;
});
