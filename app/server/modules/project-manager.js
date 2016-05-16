var crypto = require('crypto');
var MongoDB = require('mongodb').Db;
var Server = require('mongodb').Server;
var moment = require('moment');

var dbPort = 27017;
var dbHost = 'localhost';
var dbName = 'node-login';

/* establish the database connection */

var db = new MongoDB(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}), {w: 1});
db.open(function (e, d) {
    if (e) {
        console.log(e);
    } else {
        console.log('connected to database :: ' + dbName);
    }
});
var projects= db.collection('projects');


/* record insertion, update & deletion methods */

exports.addNewProject = function (newData, callback) {
          //  append date stamp when record was created //
    projects.insert(newData, {safe: true}, callback);
}

exports.getAllProjects = function(callback)
{
    projects.find().toArray(
        function(e, res) {
            if (e) callback(e)
            else callback(null, res)
        });
}

