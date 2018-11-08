myApp.controller('PostController',
    function PostController($scope, $http, $route) {
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
            $http.post('api/abonent/', data)
                .then(function ()  {
                    $route.reload();

                }, function () {
                    alert ('post failed')
                })

            //$http.put('api/abonent/' + accountCD, data)
            //    .then(function () {
            //        $route.reload();

            //    }, function () {
            //        alert('put failed')
            //    })
        }

    });