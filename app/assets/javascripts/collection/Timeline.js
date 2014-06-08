var com = com || {};
com.apress = com.apress || {};
com.apress.collection = com.apress.collection || {};

com.apress.collection.Timeline = Backbone.Collection.extend({

//the model that this collection uses
    model: com.apress.model.Tweet,
//the server side url to connect to for the collection
    url: 'http://127.0.0.1:3000/timeline',

    initialize: function(options){
//anything to be defined on construction goes here
    }
});

