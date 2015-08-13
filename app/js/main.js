(function(){
    var bower_path = "components/"
    requirejs.config({
        //baseUrl: '',
        paths: {
            'libs'      : '../js/libs',
            'templates' : '../templates',
            'collections' : '../js/collections',
            'backbone'  : bower_path+ 'backbone-min',
            'handlebars': bower_path+ 'handlebars.min',
            'jquery'    : bower_path+  'jquery.min',
            'underscore': bower_path+ 'underscore-min',
            'text'      : bower_path+ 'text',
            'hbs'       : bower_path+ 'hbs'
        }
    });
    require(['backbone']);
})();

require(['app'], function(App){
  App.start();
});
