myApp.controller('ServController',
    function ServController($scope, dataService, $timeout) {
        
        $scope.clean = function() {
            $scope.accountcd = null;
            $scope.fio = null;
            $scope.phone = null;
            $scope.streetcd = null;
            $scope.houseno = null;
            $scope.flatno = null;
        }

        $scope.getFlag = function (fg, accountcd, fio, phone, streetcd, houseno, flatno) { 
            var a = document.getElementById('accCD');
            if (fg === 1) {
                $scope.flag = fg;
                $scope.clean();               
                a.disabled = false;
            }
            if (fg === 2) {
                $scope.flag = fg;
                $scope.accountcd = accountcd;
                $scope.fio = fio;
                $scope.phone = phone;
                $scope.streetcd = streetcd;
                $scope.houseno = houseno;
                $scope.flatno = flatno;;
                a.disabled = true;
            }
        }

        $scope.transferData = function (accountcd, fio, phone, streetcd, houseno, flatno) {

            var data1 = {
                accountCD: accountcd,
                FIO: fio,
                PHONE: phone,
                STREETCD: streetcd,
                HOUSENO: houseno,
                FLATNO: flatno
            };

            var data2 = {
                accountCD: $scope.accountcd,
                FIO: $scope.fio,
                PHONE: $scope.phone,
                STREETCD: $scope.streetcd,
                HOUSENO: $scope.houseno,
                FLATNO: $scope.flatno
            };

            if ($scope.flag === 1) {
                dataService.post(data1);
            }

            if ($scope.flag === 2) {
                dataService.edit(data2.accountCD, data2);               
            }

        }

        var promiseObj = $timeout(function () {
            return dataService.getData();
        }, 1);

        promiseObj.then(function (value) {
            $scope.abonent = value;
            console.log(value);
        });

        $scope.deleteData = function (accountCD) {
            dataService.del(accountCD)
        }
    }
)