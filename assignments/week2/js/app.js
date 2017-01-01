(function() {
'use strict';

angular.module("ShoppingListCheckOff", [])

.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService)
;


AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.getItems = function() {
        return ShoppingListCheckOffService.getBought();
    };
}

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
    this.getItems = function() {
        return ShoppingListCheckOffService.getToBuy();
    };

    this.markBought = function(idx) {
        return ShoppingListCheckOffService.markBought(idx);
    };
}

function ShoppingListCheckOffService() {

    // pre.populate list
    this.itemsToBuy = [
        { name: "cookies", quantity: 2 },
        { name: "chips", quantity: 3 },
        { name: "potatos", quantity: 20 },
        { name: "apples", quantity: 4 },
        { name: "toothpaste", quantity: 1 }
    ];

    this.itemsBought = [];

    this.getToBuy = function () {
        return this.itemsToBuy;
    };

    this.getBought = function () {
        return this.itemsBought;
    };

    this.markBought = function (idx) {
        var item = this.itemsToBuy[idx];

        // remove from toBuy list
        this.itemsToBuy.splice(idx, 1);

        // add to itemsBought list
        this.itemsBought.push(item);
    };


}

})();
