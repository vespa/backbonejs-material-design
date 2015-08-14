define([
  'hbs!templates/index'
], function(contentBody){
  var Content = Backbone.View.extend({
    render: function() {

      this.$el.html(contentBody());
      return this;
    }
  });
  return new Content();
});
