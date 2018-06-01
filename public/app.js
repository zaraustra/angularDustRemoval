(function(angular) {
    let myApp = angular.module('spicyApp1', []);
    
    myApp.controller('SpicyController', ['$scope', function($scope) {
        $scope.spice = 'very';
        
        $scope.chiliSpicy = function() {
            $scope.spice = 'chili';
        };
        
        $scope.jalapenoSpicy = function() {
            $scope.spice = 'jalapeño';
        };
    }]);
    
    myApp.controller('Controller2', ['$scope', function($scope) {
        $scope.vars = ['funny', 'fully'];
    }]);
})(window.angular);