var models = require('../models');
var utils = require('../utils');

module.exports = {
  messages: {
    get: function (req, res) {
      // models.messages.get()
      //   .then((sqlMessages) => {
      //     utils.sendResponse(res, sqlMessages);
      //   });
      
      models.messages.get(res);
      
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res);

    }, // a function which handles posting a message to the database
    options: function(request, response) {
      utils.sendResponse(response, null);
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req, res);
    },
    options: function(request, response) {
      utils.sendResponse(response, null);
    } 
  }

  
};




  