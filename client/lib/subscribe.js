import {Template} from 'meteor/templating';


Template.index.events({
    'click .getPeopleCount': function (event) {
        event.preventDefault();
        Meteor.call('get_all_counts');
        //Meteor.call('get_count');
        //Meteor.call('set_alert_message');
    }
});


Template.index.events({
  'click .doROdge': function (e) {
    e.preventDefault();
    Meteor.call('get_count');
  }
});
