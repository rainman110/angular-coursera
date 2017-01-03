(function () {

angular.module("MenuApp")
.controller("ItemsController", ItemsController);


ItemsController.$inject = ['category'];
function ItemsController(category) {
    var controller = this;

    controller.items = [];
    controller.name = "";

    controller.$onInit = function() {
        controller.items = category.menu_items;
        controller.name = category.category.name;
    };
}

})();