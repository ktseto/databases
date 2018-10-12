var Parse = {

  server: `http://127.0.0.1:3000`,

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/classes/messages',
      type: 'GET',
      //data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },
  
  createUser: function(username, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/classes/users',
      type: 'POST',
      data: JSON.stringify({username: username}),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create user', error);
      }
    });
  },
  
  

};