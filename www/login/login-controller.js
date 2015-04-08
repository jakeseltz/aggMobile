'use strict';

angular.module('MyApp.controllers').controller('LoginCtrl', 
  function($scope, $state, $ionicLoading, Auth, User,$rootScope) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.errorMessage = null;

    $scope.login = function() {
      $scope.errorMessage = null;

      $ionicLoading.show({
        template: 'Please wait...'
      });
 
      Auth.login($scope.user.email, $scope.user.password)
          .then(User.loadCurrentUser)
          .then(redirectBasedOnStatus)
          .catch(handleError);
    };

    $scope.logout = function(){
      Auth.logout();

    }


    function redirectBasedOnStatus() {
      $ionicLoading.hide();
      
      if (!User.hasChangedPassword()) {
        $state.go('tab.behaviors');
      } else {
        $state.go('change-password');
      }
    }

    function handleError(error) {
      switch (error.code) {
        case 'INVALID_EMAIL':
        case 'INVALID_PASSWORD':
        case 'INVALID_USER':
          $scope.errorMessage = 'Email or password is incorrect';
          break;
        default:
          $scope.errorMessage = 'Error: [' + error.code + ']';
      }

      $ionicLoading.hide();
    }
  });
