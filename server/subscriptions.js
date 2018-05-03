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
        var volume = await asyncVolumeCall(xapi);
        console.log(volume);
        return volume;

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

    'get_presence': async function () {
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
    'get_count': async function () {
        const ip_address = '10.230.105.193';
        const jsxapi = require('jsxapi');
        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@' + ip_address, {
            username: 'integrator',
            password: 'integrator',
        });

        var count = await asyncCountCall(xapi);
        console.log(count);
        return count;
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

        // RoomKitDB.update('PeopleCount', count);
        //
        // var result_cursor = RoomKitDB.find();
        //
        // var result_array = result_cursor.fetch();
        //
        // console.log(result_array);
        // console.log(RoomKitDB.fetch)

    },

    'set_alert_message': async function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        xapi.command('UserInterface Message Alert Display', {Text: "Matt Damon"} );
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


    'connectCalls': async function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        xapi.command('Dial', { Number: 'hburke@cisco.com' });
    },
    'disconnectCalls': async function () {
        const jsxapi = require('jsxapi');

        // Connect over ssh to a codec
        const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
            username: 'integrator',
            password: 'integrator',
        });
        xapi.command('Call Disconnect');
    },

    'get_all_counts': function () {
        for (i = 0; i <= 1; i++) {
            Meteor.call('get_count', '10.230.105.193',);
        }
    },
    // 'set_all_alerts': function () {
    //   for (i=0; i<=1; i++) {
    //     Meteor.call('set_alert_message', '10.230.105.193',);
    // }
    // },

});
