import {Template} from 'meteor/templating';


Template.index.events({
    'click .doSometihng': function (event) {
        event.preventDefault();
        Meteor.call('get_volume', function(volume) {
          console.log(volume);
        });
        //Meteor.call('get_count');
        //Meteor.call('set_alert_message');
    }
});


Template.index.events({
  'click .doROdge': function (e) {
    e.preventDefault();
    Meteor.call('get_count', function(count) {
      console.log(count);
    });
  }
});
