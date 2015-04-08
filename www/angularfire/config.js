angular.module('firebase.config', [])
  .constant('FBURL', 'https://aggresstest3356.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','google'])

  .constant('loginRedirectPath', '/login');
