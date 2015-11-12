
define(['chaplin'],function(chaplin){
   'use strict';
    var Application = Chaplin.Application.extend({
        title: 'TaskTime.io',
        start:  function(){
           Chaplin.Application.prototype.start.apply(this);
        }
    })
    return Application ;
});
