var models = require('../models');
var utils = require('../utils');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
        .then((sqlMessages) => {
          utils.sendResponse(res, sqlMessages);
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      utils.collectData(req, function(message) {
        message.objectId = ++objectIdCounter;
        messages.push(message);
        utils.sendResponse(res, {objectId: message.objectId}, 201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      
    }
  }
};

