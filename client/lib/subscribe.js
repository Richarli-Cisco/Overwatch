import {Template} from 'meteor/templating';


Template.index.events({
    'submit form': function (event) {
        event.preventDefault();
        Meteor.call('get_volume');
        Meteor.call('get_presence');
        Meteor.call('get_count');
        Meteor.call('set_alert_message');
    }
});
