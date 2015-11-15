/**
 * Created by admin on 07/11/2015.
 */
define(['chaplin','models/base/model'],function(Chaplin,Model){
    'use strict';
    var Collection  = Chaplin.Collection.extend({
        model: Model
    }) ;
    return Collection;
});