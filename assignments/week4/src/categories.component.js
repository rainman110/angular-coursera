(function () {

angular.module("MenuApp")
.component("categories", {
    templateUrl: 'src/templates/categories.component.html',
    bindings: {
        items: '<'
    }
});

})();