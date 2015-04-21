studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function(newName) {
    this.students.push({name: newName});
  };

  factory.deleteStudent = function(student) {
    var index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }

  return factory;
});
