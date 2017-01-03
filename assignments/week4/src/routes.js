(function() {

// Configure the routing
angular.module("MenuApp")
    .config(RoutesConfig)
;

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    
    // we want 3 states: home, categories, items

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
    })

    .state('categories', {
        url: '/categories', 
        templateUrl: 'src/templates/categories-view.template.html',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        },
        controller: 'CategoriesController as categories'
    })

    .state("items", {
        url: '/items/{category}',
        templateUrl: 'src/templates/item-view.template.html',
        resolve: {
            category: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.category);
            }]
        },
        controller: "ItemsController as category"
    });
}

})();