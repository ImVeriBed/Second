myApp.controller('ServController',
    function ServController($scope, dataService, $timeout, $http, $location, $route) {

        var promiseObj = $timeout(function () {
            return dataService.getData();
        }, 1);

        promiseObj.then(function (value) {
            $scope.abonent = value;
            console.log(value);
        });

        $scope.deletedata = function (accountCD) {
            $http.delete('api/abonent/' + accountCD)
                .then(function () {
                    $route.reload();
                }, function (response) {
                    console.log('delete failed');
                    console.log(response.status)
                })
        }
    }
)