define([
  'jquery',
  'backbone',
  'views/index',
  'hbs!templates/partial/main-header',
  'hbs!templates/partial/menu',
  'views/partial/menu',
  'hbs!templates/partial/menu-header',
  'material',
], function ($, Backbone, index, mainHeader, menu,  menuContent, menuHeader, material) {

  var AppRouter = Backbone.Router.extend({
    mainContent: $("#mainContent"),
    routes: {
      "" : "index"
    },
    render: function(obj){
      obj.setElement(this.mainContent);
      obj.render();
      if(componentHandler){
        componentHandler.upgradeAllRegistered();
      }
    },
    index: function(){
      this.render(index);
    },
    initialize: function(){
      $(".main-header").html(mainHeader()); 
      $(".menu").html(menu({content: menuContent() }));
      $(".menu-header").html(menuHeader());
    }
  });
  return {
    start: function() {
      var router = new AppRouter();
      Backbone.history.start();
    }
  };
});
