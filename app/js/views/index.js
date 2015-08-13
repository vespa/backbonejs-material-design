define([
  'hbs!templates/partial/header'
], function(header){
  var Content = Backbone.View.extend({
    render: function() {
      var hd = header({title: "Title"}),
          body = "",
          content = hd+body;
      this.$el.html(content);
      return this;
    }
  });
  return new Content();
});
