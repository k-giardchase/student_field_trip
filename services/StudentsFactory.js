studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function(newName) {
    this.students.push({name: newName});
  };

  return factory;
});
