//test( "Simple Equality Tests", function() {
//    ok( 1 == "1", 'Passed simple equals check');
//    ok( 1 !== "1", 'Passed really equals check')
//});

//module('Equality Tests', {
//    setup: function(){
//        console.log('setting things up');
//    },
//    teardown: function(){
//        console.log('clearing things down');
//    }
//});
//
//test( "Simple Equality Tests", function() {
//    ok( 1 == '1', 'Passed simple equals check');
//    ok( 1 !== '1', 'Passed really equals check')
//    notEqual(1, '2', 'Not Equal');
//});
//
//test('More simple tests', function(){
//    expect(2);
//    equal(true, true, 'Simple true == true test');
//    strictEqual(true, true, 'Simple true === true test');
//});
//
//module('Asynchronous Tests');
//
//asyncTest('asyncTest', function() {
//    expect(1);
//    var actual = true;
//    setTimeout(function() {
//        ok(actual, 'Simple test to prove async');
//        start();
//    }, 1000);
//});
//

//QUnit.jUnitReport = function(report) {
//    console.log(report.xml);
//};
////tests for DOM manipulation
//module('Fixture Test', {
//    setup: function(){
//        fixtureEl = $('#qunit-fixture');
//        fixtureEl.append('<p id=\'myparagraph\'>New Paragraph</p>');
//    }
//});
//test('Check for paragraph', function(){
//    var results = fixtureEl.find('#myparagraph').length;
//    console.log(fixtureEl);
//    console.log(results);
//    ok(results === 1, 'Found the correct paragraph');
//});

//tests for DOM manipulation
module('Model Tests: Tweet');

test('Check initialization parameters', function(){

    expect(2);

//create a new instance of a Tweet model
    var user = {name: 'James'};
    var tweet = new com.apress.model.Tweet({user: user, text: 'Hello World'});

    equal(tweet.get("text"), "Hello World", "Tweet text set correctly");
    equal(tweet.get("user").name, "James", "User name object set correctly");
});

module('View Tests: Profile');
asyncTest( "asynchronous view tests", function() {
    expect( 1 );
    var profileView = new com.apress.view.ProfileView({user: 'sugrue'});
    profileView.render();

    setTimeout(function() {

        equal(profileView.$('h3').text(), "James Sugrue", "Profile view rendered with correct name");
        start();
    }, 1000);
});












