import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
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
    });

    xapi.command('UserInterface Message Alert Display', {Text: "Something Something Darkside."});
    // Listen to feedback
    const off = xapi.event.on('Standby', (event) => {
        // ...
    });

    // De-register feedback
    off();
});
