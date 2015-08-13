define([
  'jquery',
  'backbone',
  'views/index'
], function ($, Backbone, index) {

  var AppRouter = Backbone.Router.extend({
    mainContent: $("#mainContent"),
    routes: {
      "" : "index"
    },
    render: function(obj){
      obj.setElement(this.mainContent);
      obj.render();
    },
    index: function(){
      //this.render(index);
    }
  });
  return {
    start: function() {
      var router = new AppRouter();
      Backbone.history.start();
    }
  };
});
