var com = com || {};
com.apress = com.apress || {};
com.apress.view = com.apress.view || {};

com.apress.view.TimelineView = Backbone.View.extend({

    el: '#timeline',

    template: Handlebars.compile($("#timeline-template").html()),

    timeline: null,

    initialize: function(options){
        var self = this;

        //create a collection for this view to render
        self.timeline = new com.apress.collection.Timeline();
        //initial render
        self.render();

        //force the fetch to fire a reset event
        self.timeline.fetch({reset:true});

        self.listenTo(self.timeline, 'reset', self.render);
    },
    render: function(){
        var self = this;
        console.log( self.timeline.models)
        console.log( self.timeline.models)
        if(self.timeline.models.length > 0){
            var output = self.template({tweet: self.timeline.toJSON()});

            self.$el.append(output);
        }
        return self;
    }

});
var timelineView = new com.apress.view.TimelineView();