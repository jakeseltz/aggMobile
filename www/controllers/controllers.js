'use strict';

angular.module('MyApp.controllers')

.controller('MessageCtrl', 
  function($scope,Auth,User,$q,$firebase) {


    console.log(Auth.currentUser)
    $scope.userNow = Auth.currentUser;

    
    var ref = new Firebase("https://aggresstest3356.firebaseio.com/users/" ); 

    console.log(ref)

  })

.controller('BehaviorsCtrl', 
  function() {

  })

.controller('ProgressCtrl', 
  function() {

  })

