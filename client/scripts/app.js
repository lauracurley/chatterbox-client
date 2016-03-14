
var init = function() {
  _.each(messages, function(message, i, messages) {
    app.addMessage(message);
  });

};
var friends = [];
var messages = [];

var send = function(message) {
  $.ajax({
    url: '',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify(message),
    contentType: 'application/json; charset=utf-8'
  });
};

// app's fetch url - 'https://api.parse.com/1/classes/messages'

var fetch = function(url) {
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      messages = data.results;
      console.log(messages);
    },
    error: function(data) {
      console.log('fetch request failed : ' + data.toString());
    }
  });
};

var clearMessages = function() {
  $('#chats').empty();
};

var addMessage = function(message) {
  var $message = $('<div></div>');
  $message.append('<h2 class="username">' + message['username'] + '</h2>');
  $message.append('<p>' + message['text'] + '</p>');
  $('#chats').append($message);
};

var addRoom = function(roomName) {
  $('#roomSelect').append('<div>' + roomName + '</div>');
};

var addFriend = function(userName) {
  friends.push(userName);
};

//TODO: Make this filter stuff
var filterMessages = function(data) {
  _.each(data.results, function(message, i, list) {
    messages.push(message);
  });
};


var app = {
  init: init,
  send: send,
  fetch: fetch,
  clearMessages: clearMessages,
  addMessage: addMessage,
  addRoom: addRoom
};
// YOUR CODE HERE:

