import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
    const jsxapi = require('jsxapi');

    console.log('doing a thing');
// Connect over ssh to a codec
    const xapi = new jsxapi.connect('ssh://integrator@10.230.105.193', {
        username: 'integrator',
        password: 'integrator',
    });

    // return "xapi";

    console.log('doing a thing 2');

    var volume = xapi.status.get('Audio Volume');
    console.log(volume);
    // Set up a call

    xapi.status
        .get('Audio Volume').then((volume) => { console.log(volume); });


    console.log('doing a thing3');


    xapi.command('UserInterface Message Alert Display', {Text: "Something Something Darkside."});
    // Listen to feedback
    const off = xapi.event.on('Standby', (event) => {
        // ...
    });

    // De-register feedback
    off();
});
