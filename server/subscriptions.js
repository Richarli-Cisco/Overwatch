import {Meteor} from 'meteor/meteor'


Meteor.methods({
    'login': function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
    },

    'get_volume': function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        // Set up a call
        xapi.status
            .get('Audio Volume').then((volume) => {
            console.log(volume);
            return volume;
        });

    },

    'get_presence': function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        // Set up a call
        xapi.status
            .get('RoomAnalytics PeoplePresence').then((presence) => {
            console.log(presence);
        });
    },
    'get_count': function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        // Set up a call
        xapi.status
            .get('RoomAnalytics PeopleCount current').then((count) => {
            console.log(count);
            return count;
        });
    },

    'set_alert_message': function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        xapi.command('UserInterface Message Alert Display', {Text: "Matt Damon"});
    },

    'hey_listen': function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        // Listen to feedback
        const off = xapi.event.on('Standby', (event) => {
            // ...
        });

        // De-register feedback
        off();
    },
});
