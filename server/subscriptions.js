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

    'get_volume': async function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        volume = await asyncVolumeCall(xapi);
        console.log(volume);

        function asyncVolumeCall(xapi) {
            return new Promise(resolve => {
                // Set up a call
                xapi.status
                    .get('Audio Volume').then((volume) => {
                    resolve(volume);
                })
                    .catch((error) => {
                        console.log(error);
                    });
            });
        }

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
    'get_count': async function (ip_address) {
        const jsxapi = require('jsxapi');
        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@' + ip_address, {
            username: 'integrator',
            password: 'integrator',
        });

        count = await asyncCountCall(xapi);
        console.log(count);

        function asyncCountCall(xapi) {
            return new Promise(resolve => {
                // Set up a call
                xapi.status
                    .get('RoomAnalytics PeopleCount current').then((count) => {
                    resolve(count);
                })
                    .catch((error) => {
                        console.log('There was a problem connecting to this device');
                    });
            });
        }
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

    'get_all_counts': function () {
        for (i = 0; i <= 1; i++) {
            Meteor.call('get_count', '10.230.105.193',);
        }
    },

});
