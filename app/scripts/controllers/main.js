'use strict';

angular.module('newQApp')
  .controller('MainCtrl', function ($scope, angularFire) {
    $scope.unicorns = [];

    var playerTurn = 1;

    var database = new Firebase("https://thegaq.firebaseio.com/unicorns");
    var promise = angularFire(database, $scope, "unicorns");
    promise.then(function() {
        $scope.unicorns = [];
    });

    $scope.addName = function(x) {
    	console.log(1);
    	$scope.unicorns.push(x);
    	$scope.userInput = ''; 	
    }

    $scope.deleteName = function(y) {
    	console.log(2);
    	$scope.unicorns.splice(y, 3);
    }

    $scope.clearAll = function() {
    	console.log(3);
    	$scope.unicorns = [];
    }
    

  });
