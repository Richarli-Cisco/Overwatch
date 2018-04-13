import {Template} from 'meteor/templating';


Template.index.events({
    'submit form': function (event) {
        event.preventDefault();
        Meteor.call('get_volume');
    }
});