define([
  'jquery',
  'backbone',
  'views/index',
  'hbs!templates/partial/menu',
  'material',
], function ($, Backbone, index, menu, material) {

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
      $(".menu").html(menu());
    }
  });
  return {
    start: function() {
      var router = new AppRouter();
      Backbone.history.start();
    }
  };
});
