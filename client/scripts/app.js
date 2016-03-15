
var init = function() {
  console.log('refresh');
  app.fetch('https://api.parse.com/1/classes/messages');
};

var friends = [];
var userName = 'Jexxebelle';

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
      app.clearMessages();
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

var escapeHTML = function(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var addMessage = function(message) {
  var $message = $('<div class="username chat"></div>');
  $message = $message.append('<h2>' + escapeHTML(message['username']) + '</h2>');
  $message = $message.append('<p>' + escapeHTML(message['text']) + '</p>');
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
$(document).ready(function() {

  $('#submitFormJezzebelle').submit(function(event) {
    event.preventDefault();
    var newMessage = {
      username: userName,
      text: $('input:text').val(),
      roomname: 'lobby'
    };
    app.send(newMessage);
    return false;
  });

});

$(document).delegate('.username', 'click', app.addFriend);

setInterval(app.init, 1000);