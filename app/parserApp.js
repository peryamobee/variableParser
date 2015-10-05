/**
 * Created by pery on 04/10/2015.
 */
angular.module('parserApp',['mgcrea.ngStrap', 'firebase' ])
    .controller('mainCtrl',mainCtrl);

function mainCtrl($scope){
    $scope.model = {};
    $scope.extractData = function () {
        $scope.data = keywords($scope.model.userInput)
    }
}