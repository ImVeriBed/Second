var myApp = angular.module('myApp', ["ngRoute"])
    .config(function ($routeProvider/*, $locationProvider*/) {
        $routeProvider.when('/aboTable',
            {
                templateUrl: "/app/Views/aboTable.html",
                controller: 'ServController'
            })
            .when('/',
                {
                    templateUrl: "/app/Views/Main.html"
                })
        //if (window.history && window.history.pushState) {
        //    $locationProvider.html5Mode({
        //        enabled: true, // Спрятать /#!/ в адресной строке
        //        requireBase: false // Не использовать <base href="">
        //    });
        //}
    });