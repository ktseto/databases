var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function () {
      return new Promise(function(resolve, reject) {
        console.log('VVVVVVVVVVVVVVVVVVV');
        db.con.query('SELECT * FROM messages INNER JOIN rooms ON messages.roomid = rooms.id', [], (err, results) => {
          if (err) { return reject(err); }
          resolve(results);
        });
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

