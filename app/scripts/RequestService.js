angular.module('weblogApp')
  .service('RequestService', [ $http, function ($http) {
    
  	var urlBase = 'http://localhost:8080';

  	RequestService.getAllPosts = function(){
  		return $http.get(  urlBase + '/getAllPosts' );
  	}

  	return RequestService;

  }]);


