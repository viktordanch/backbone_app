// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require external/underscore.js
//= require external/backbone.js
//= require external/moment-with-langs.js
//= require external/handlebars-v1.3.0.js
//= require external/backbone.layoutmanager.js
//= require external/backgrid.js
//= require external/dialog.js
//= require_tree ./test
//= require_tree ./model
//= require_tree ./collection
//= require_tree ./util
//= require_tree ./view
//= require_tree ./router

Backbone.Layout.configure({
    manage: true
});

$(function() {

    var timelineView = new com.apress.view.TimelineView(),
        profileView = new com.apress.view.ProfileView({user: 'sugrue'})
//        searchModel = new com.apress.model.Search(),
//        searchView = new com.apress.view.SearchView({model: searchModel}),
//        appRouter = new com.apress.router.AppRouter({searchModel: searchModel});

    Backbone.history.start();
//    var SimpleSubview = Backbone.Layout.extend({
//        template: "#view"
//    });
//
//   var SimpleSubview2 = Backbone.Layout.extend({
//        template: "#view2"
//    });
//
//  var SimpleSubview3 = Backbone.Layout.extend({
//        template: "#view3"
//    });
//
//    console.log($('.container').length)
//    console.log($('#layout').length)
//    var layout = new Backbone.Layout({
//        el : '#container',
//
//        template: '#layout',
//
//        parent: '',
//
//        views: {
//            '#subview' : new SimpleSubview(),
//            '#subview2' : new SimpleSubview2(),
//            '#subview3' : new SimpleSubview3()
//        },
//
//        beforeRender: function(){
//            console.log('About to render');
//        },
//
//        afterRender: function(){
//            console.log('Render completed');
//        }
//    });
//    layout.render();
//
//    //---------------------------------Backgrid
//
//    var Book = Backbone.Model.extend({});
//    var Library = Backbone.Collection.extend({});
//
//
////define contents
//    var backboneBook = new Book({name: 'Beginning Backbone', author: 'James Sugrue', year:
//        '2013-12-24'});
//    var nodeBook = new Book({name: 'Pro Node.js for Developers', author: 'Colin J. Ihrig', year:
//        '2013-11-01'});
//    var proJavascriptBook = new Book({name: 'Pro JavaScript Techniques', author: 'John Resig',
//        year: '2006-02-01'});
//
////create collection
//    var myLibrary = new Library();
//    myLibrary.set([backboneBook, nodeBook, proJavascriptBook]);
//
//
//    var columns = [ {
//        name: "name",
//        label: "Name",
//        cell: "string"
//    }, {
//        name: "author",
//        label: "Author",
//        cell: "string"
//    }, {
//        name: "year",
//        label: "Year",
//        editable: false,
//        cell: "date"
//    }];
//
//// Initialize a new Grid instance
//    var grid = new Backgrid.Grid({
//        columns: columns,
//        collection: myLibrary
//    });
//
//    $("#container").append(grid.render().$el);
//







});






