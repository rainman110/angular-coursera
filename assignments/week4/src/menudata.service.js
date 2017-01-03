(function() {

angular.module("data")

.service("MenuDataService", MenuDataService)
.constant("apiPath", "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'apiPath'];
function MenuDataService($http, apiPath) {

    var service = this;

    // returns a promise !
    service.getAllCategories = function () {
        return $http({
            url: apiPath + "/categories.json"   
        }).then(function(result) {
            return result.data;
        });
    };

    // returns a promise !
    service.getItemsForCategory = function (categoryShortName) {
        return $http({
            url: apiPath + "/menu_items.json",
            params: {
                category: categoryShortName
            }
        }).then(function(result) {
            return result.data;
        });
    };
}

})();