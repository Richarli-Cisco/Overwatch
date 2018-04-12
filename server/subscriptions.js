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
        // Set up a call
        xapi.status
            .get('Audio Volume').then((volume) => {
            console.log(volume);
        });
    },

    'set_alert_message': function (new_msg) {
        xapi.command('UserInterface Message Alert Display', {Text: new_msg});
    },

    'hey_listen': function () {
        // Listen to feedback
        const off = xapi.event.on('Standby', (event) => {
            // ...
        });

        // De-register feedback
        off();
    },
});