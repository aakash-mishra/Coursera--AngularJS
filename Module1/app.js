(function(){
'use strict';
angular.module("LunchChecker",[])
.controller("LunchController",LunchController);

function LunchController($scope){
$scope.values = "" ;
$scope.result = "";
$scope.checkLunch = function() {

  var input = $scope.values;
  var inputArray = input.split(",");

  if($scope.values=="") {
    $scope.result="Please enter data first";
  }

  else if(inputArray.length<=3) {
    $scope.result="Enjoy!";
  }
  else {
    $scope.result="Too much!";
  }
};

}



})();
