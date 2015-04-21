studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;

  $scope.updatePermSlip = function(item) {
    StudentsFactory.updatePermSlip(item);
  };
});
