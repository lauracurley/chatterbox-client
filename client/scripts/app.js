
var init = function() {
  app.fetch('https://api.parse.com/1/classes/messages');
};

var friends = [];

var send = function(message) {
  $.ajax({
    url: 'https://api.parse.com/1/classes/messages',
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
      var messages = data.results;
      _.each(messages, function(message, i, messages) {
        app.addMessage(message);
      });
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
  var $message = $('<div class="username"><div>');
  $message.append('<h2>' + message['username'] + '</h2>');
  $message.append('<p>' + message['text'] + '</p>');
  $('#chats').append($message);
  // console.log(message['username'], message['text']);
};

var addRoom = function(roomName) {
  $('#roomSelect').append('<div>' + roomName + '</div>');
};

var addFriend = function() {
  friends.push($(this)[0].textContent);
  // console.log("addFriend");
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
  addRoom: addRoom,
  addFriend: addFriend,
};

$(document).delegate('.username', 'click', app.addFriend);

app.init();