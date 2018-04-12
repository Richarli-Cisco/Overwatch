import {Template} from 'meteor/templating';


Template.index.events({
    'submit form': function (event) {
        event.preventDefault();
        console.log("Ping");
        Meteor.call('login');
        Meteor.call('get_volume');
    }
});