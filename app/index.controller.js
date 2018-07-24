angular.module('appModule')
    .controller('IndexController', ['$location', function ($location) {
        this.userConnected = false;
    }]);