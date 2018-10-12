var db = require('../db');
var Promise = require('bluebird');
var utils = require('../utils');

module.exports = {
  messages: {
    // get: function () {
    // return new Promise(function(resolve, reject) {
    //   const queryString = `SELECT * FROM messages
    //     INNER JOIN rooms ON messages.roomid = rooms.id`;
        
    //   db.con.query(queryString, [], (err, results) => {
    //     if (err) { return reject(err); }
    //     resolve(results);
    //   });
    // });
    get: function (res) {
      const queryString = `SELECT * FROM messages, rooms, users
                           WHERE messages.roomid = rooms.id
                           and messages.userid = users.id`;
      db.con.query(queryString, [], function(err, data) {
        if (err) {
          throw new Error(err);
        } else {
          utils.sendResponse(res, {results: data});
        }
      });
      
    }, // a function which produces all the messages
    post: function (req, res) {
      // body looks like this:
      // {username: 'Valjean',
      // message: 'In mercy\'s name, three days is all I need.',
      // roomname: 'Hello'}
      // return new Promise(function(resolve, reject) {
      //   const queryString = `INSERT INTO messages (text, createdAt, userid, roomid) VALUES (${text}, NOW(), ${}, ${})`;
        
      // });
      
      var userGet = new Promise(function(resolve, reject) {
        const queryString = `SELECT * FROM users
                             WHERE username = "${req.body.username}"`;
                             
        db.con.query(queryString, [], (err, results) => {
          if (err) { return reject(err); }
          resolve(results);
        });
      });
      
      var roomGet = new Promise(function(resolve, reject) {
        const queryString = `SELECT * FROM rooms
                             WHERE roomname = "${req.body.roomname}"`;
        
        db.con.query(queryString, [], (err, results) => {
          if (err) { return reject(err); }
          resolve(results);
        });                     
      });
      
      Promise.all([userGet, roomGet]).then(function(arr) {
        // does arr look different if reject(err) in either promise???
        // arr[0] = userGet = [{id: 1, username: 'john'}]
        // arr[1] = roomget = [{id: 901, roomname: 'lobby'}]
        const queryString = `INSERT INTO messages (text, createdAt, userid, roomid) VALUES ("${req.body.text}", NOW(), ${arr[0][0].id}, ${arr[1][0].id})`;

        db.con.query(queryString, [], (err, results) => {
          if (err) { throw new Error(err); }
          utils.sendResponse(res, null);
        });                
      
      }); // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    //?????????????? no use case?
    post: function (req, res) {
    // body looks like this:  { username: 'Valjean' }
    
      // use case: only at login that we need to handle
      // a new/existing user.  if username already exists
      // in db, then do nothing.  if username doesn't exist
      // already, insert into "users" db
      
      // MVP: assume that all users are new users => insert them
      // ??????????????????
      
      const queryString = `INSERT INTO users (username) VALUES ("${req.body.username}")`;
      
      db.con.query(queryString, [], (err, results) => {
        if (err) { return reject(err); }
        utils.sendResponse(res, null);
      });

      
      
      // how do we know if a user already exists?
      
      
      
      
    }
  }
};

