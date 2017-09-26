// public/js/home/HomeService.js
angular.module('HomeService', []).factory('Home', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/me');
        }
    }

}]);
