(function(){
'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItems);

function FoundItems(){


  var ddo = {

  templateUrl: 'loader/itemsloaderindicator.template.html'
  };

  return ddo;

}


NarrowItDownController.$inject=['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
  var ctrl = this;
  ctrl.searchTerm = "";
  ctrl.found=[];
  ctrl.startSearch = function(){
    ctrl.found=[];
    ctrl.error="";
    if(ctrl.searchTerm == ""){
      ctrl.error="error";
      ctrl.found=[];
    }

    else{

     MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(data){
         if(data.length==0) ctrl.error = "error";
         else {
           ctrl.found=[];
           for(var i=0;i<data.length;i++){
             ctrl.found.push(data[i]);
           }
         }
    });

  }
  };

  ctrl.removeItem = function(itemIndex){
    ctrl.found.splice(itemIndex,1);
  }

}

MenuSearchService.$inject= ['$http','ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
  var search = this;
  var items = [];

  search.getMatchedMenuItems = function(searchTerm){
    items=[];
    return $http({
      method:"GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function(response){
      for(var i=0;i<response.data.menu_items.length;i++){
      if(response.data.menu_items[i].description.trim().toLowerCase().indexOf(searchTerm)!== -1 ){
        var _name = response.data.menu_items[i].name;
        var _desc= response.data.menu_items[i].description;
        var _sname = response.data.menu_items[i].short_name;
        items.push({name:_name, description:_desc, short_name:_sname});
      }
    }

      return items;
  }).catch(function(error){
    console.log("error while retrieving data");
  });
//end of getMatchedMenuItems
  }

}//end of service


})();
