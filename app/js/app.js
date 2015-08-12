define([
  'jquery',
  'router',
], function ($, Router){
  var App = {
    start: function(callback) {
        Router.start();
    }
  };
  return App;
});
