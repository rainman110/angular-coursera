(function () {
'use strict';

angular.module("LunchCheck", [])

.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
    $scope.message = "";
    $scope.dishes = "";

    $scope.checkTooMuch = function() {
        var dishes = $scope.dishes;
        if (dishes === "") {
            console.log("empty");
            $scope.message = "Please enter data first";
        }
        else {
            var nDishes = dishes.split(",").length;
            if (nDishes > 3) {
                $scope.message = "Too much!";
            }
            else {
                $scope.message = "Enjoy!";
            }
        }

    };
};

})();