myApp.factory('dataService', function ($http, $q, $route) {
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
        },

        post: function (dat) {
            $http.post('api/abonent/', dat)
                .then(function () {
                    $route.reload();
                }, function () {
                    alert('post failed')
                })
        },

        del: function (accountCD) {
            $http.delete('api/abonent/' + accountCD)
                .then(function () {
                    $route.reload();
                }, function (response) {
                    console.log('delete failed');
                    console.log(response.status)
                })
        },

        edit: function (accountCD, info) {
            $http.put('api/abonent/' + accountCD, info)
                .then(function () {
                    $route.reload();
                }, function () {
                    alert('put failed');
                })
        }

    }
})