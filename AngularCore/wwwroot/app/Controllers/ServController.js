myApp.controller('ServController',
    function ServController($scope, dataService, $timeout, $http, $location, $route) {
        $scope.accountcd = null;
        $scope.fio = null;
        $scope.phone = null;
        $scope.streetcd = null;
        $scope.houseno = null;
        $scope.flatno = null;
        $scope.postdata = function (accountcd, fio, phone, streetcd, houseno, flatno) {

            var data = {

                accountCD: accountcd,
                FIO: fio,
                PHONE: phone,
                STREETCD: streetcd,
                HOUSENO: houseno,
                FLATNO: flatno

            };
            dataService.post(data);
        }
        var promiseObj = $timeout(function () {
            return dataService.getData();
        }, 1);

        promiseObj.then(function (value) {
            $scope.abonent = value;
            console.log(value);
        });

        $scope.deletedata = function (accountCD) {
            dataService.del(accountCD)
        }
    }
)