myApp.factory('dataService', function ($http, $q) {
    return {
        getData: function () {
            var deferred = $q.defer();
            $http.get('api/abonent')
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response.status);
                }
                );
            return deferred.promise;
        }
    }
})