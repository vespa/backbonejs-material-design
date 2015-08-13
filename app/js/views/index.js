define([
  'hbs!templates/partial/title',
  'hbs!templates/index'
], function(header, contentBody){
  var Content = Backbone.View.extend({
    render: function() {
      var hd = header({title: "Title"}),
          body = contentBody(),
          content = hd+body;
      this.$el.html(content);
      return this;
    }
  });
  return new Content();
});
