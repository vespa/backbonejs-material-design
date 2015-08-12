(function(){
    var bower_path = "../js/components"
    requirejs.config({
        //baseUrl: '',
        paths: {
            'libs'      : '../scripts/libs',
            'templates' : '../templates',
            'collections' : '../scripts/collections',
            'backbone'  : bower_path+ 'backbone/backbone',
            'handlebars': bower_path+ 'handlebars/handlebars',
            'jquery'    : bower_path+  'jquery/dist/jquery.min',
            'underscore': bower_path+ 'underscore/underscore-min',
            'text'      : bower_path+ '/requirejs-text/text',
            'hbs'       : bower_path+ 'requirejs-hbs/hbs'
        }
    });
    require(['backbone']);
})();

require(['app'], function(App){
  App.start();
});
