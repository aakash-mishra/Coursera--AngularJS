(function(){

  'use strict';
  angular.module("PasswordStrength",[])
.controller("PasswordStrengthController",function($scope){
  $scope.strength="weak";
  $scope.pass="";
  $scope.calculateStrength = function(){
    if($scope.pass.length<5)
      $scope.strength="weak";
    else if($scope.pass.length>5 && $scope.pass.length<8)
      $scope.strength="strong";
    else
      $scope.strength="very strong!!";
  };


});



})();
