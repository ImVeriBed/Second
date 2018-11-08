myApp.controller('httpController',
    function httpController($scope, $http) {
        $http.get('api/abonent')
            .then(function (response) {
                $scope.abonents = response.data;

                //console.log(response.status);
                //console.log(response.data);
            })
    }            
)