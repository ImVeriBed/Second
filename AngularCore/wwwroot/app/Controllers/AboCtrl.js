myApp.controller('AboCtrl', function ($scope) { 
    $scope.abonent = {

        region: 'Рязанская область',
        city: 'Рязань',
        address: {
            street: 'Гагарина',
            house: 13,
            flat: 1337
        }
    };
    $scope.regions = [{ id: 1, name: 'Рязанская область' },
    { id: 2, name: 'Тверская область' },
    { id: 3, name: 'Свердловская область' }];

    $scope.func = function () {
        alert('Заглушка')
    };
});

