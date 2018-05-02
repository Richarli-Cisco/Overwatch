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


Template.index.events({
    'click .setAlertMessage': function (event) {
        event.preventDefault();
        Meteor.call('set_alert_message');
        //Meteor.call('get_count');
        //Meteor.call('set_alert_message');
    }
});

Template.index.events({
    'click .connectCalls': function (event) {
        event.preventDefault();
        Meteor.call('connectCalls');
        //Meteor.call('get_count');
        //Meteor.call('set_alert_message');
    }
});

Template.index.events({
    'click .disconnectCalls': function (event) {
        event.preventDefault();
        Meteor.call('disconnectCalls');
        //Meteor.call('get_count');
        //Meteor.call('set_alert_message');
    }
});
