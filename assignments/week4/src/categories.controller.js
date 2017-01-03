(function () {

angular.module("MenuApp")
.controller("CategoriesController", CategoriesController);

CategoriesController.$inject = ['items']
function CategoriesController(items) {
    
    var categories = this;

    categories.items = [];

    categories.$onInit = function () {
        categories.items = items;
    };
}

})();