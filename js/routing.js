app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        controller: 'homeController',
        templateUrl: 'views/home.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
});
