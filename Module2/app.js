(function(){
  'use strict';
angular.module("ShoppingList", [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('CheckOffService',CheckOffService);

ToBuyController.$inject=['CheckOffService'];
function ToBuyController(CheckOffService){
  var toBuy=this;
    toBuy.items= CheckOffService.getToBuyItems();

    toBuy.moveItem=function(itemIndex){
      CheckOffService.moveItem(itemIndex);
    };
    //  toBuy.items= CheckOffService.getToBuyItems();
    //  console.log(items);
}

AlreadyBoughtController.$inject=['CheckOffService'];
function AlreadyBoughtController(CheckOffService){
  var already=this;
  already.boughtItems= CheckOffService.getBoughtItems();
}

function CheckOffService(){

  var service=this;
  var toBuyItems=[{name:"Cookies",quantity:"10"},{name:"Chocolates",quantity:"15"},{name:"Lays", quantity:"10 packets"}];
  var boughtItems=[];

  service.moveItem=function(itemIndex){
    var toRemove=toBuyItems[itemIndex];
    boughtItems.push(toRemove);
    toBuyItems.splice(itemIndex,1);
  };

  service.getToBuyItems=function(){
    return toBuyItems;
  };

  service.getBoughtItems=function(){
    return boughtItems;
  };

}

})();
