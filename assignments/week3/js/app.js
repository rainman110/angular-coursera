(function () {
'use strict';

angular.module("NarrowItDownApp", [])

.controller("NarrowItDownController", NarrowItDownController)
.directive("foundItems", FoundItemsDirective)
.service("MenuSearchService", MenuSearchService)
.constant("apiPath", "https://davids-restaurant.herokuapp.com")
;

function FoundItemsDirective() {
    var ddo = {
        restrict: 'E',
        scope: {
            items: '<foundItems',
            removeItem: '&onRemove',
            error: '@errorMsg'
        },
        templateUrl: "foundItems.html",
    };

    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
    var controller = this;

    controller.foundItems = [];
    controller.error = "";

    function setItems (items) {
        controller.foundItems = items;
        if (items.length === 0) {
            controller.error = "Nothing found";
        }
        else {
            controller.error = "";
        }
    }

    controller.searchItems = function(term) {
        if (term === "") {
            setItems([]);
            return;
        }

        MenuSearchService.getMatchedMenuItems(term)
        .then(function(response) {
            setItems(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    };

    // removes one item from the list
    controller.removeItem = function(idx) {
        controller.foundItems.splice(idx,1);
    };
}

MenuSearchService.$inject = ['$http', 'apiPath'];
function MenuSearchService ($http, apiPath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            url: apiPath + "/menu_items.json",
        }).then(function (result) {
            var foundItems = [];

            var items = result.data.menu_items;

            items.forEach(function(item) {
                if (item.description.indexOf(searchTerm) !== -1) {
                    foundItems.push(item);
                }
            });

            // return processed items
            return foundItems;
        });
    };
}

})();
