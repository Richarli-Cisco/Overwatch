import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {

  const RoomKitDB = new Mongo.Collection('roomKitDB');

  var VCEndpoint1 = {
    "Endpoint_Index": "1",
    "IPAddress": "10.230.105.193",
    "Description": "Sales Floor Test RoomKit",
    "PeopleCount": "null"
  }

  var VCEndpoint2 = {
    "Endpoint_Index": "2",
    "IPAddress": "null",
    "Description": "null",
    "PeopleCount": "null"
  }

  RoomKitDB.insert(VCEndpoint1);

  RoomKitDB.insert(VCEndpoint2);


  var result = RoomKitDB.findOne();

  console.log(result);


});
