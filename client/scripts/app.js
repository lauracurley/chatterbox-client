var init = function() {};

var send = function(message) {
  $.ajax({
    url: '',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify(message),
    contentType: "application/json; charset=utf-8"
  })
};

var fetch = function() {
  $.ajax({
    type: 'GET',
    dataType: 'json'
  })
};

var clearMessages  = function() {
  $('#chats').empty();
};

var addMessage  = function(message) {
  $('#chats').html('<blink>' + message['text'] + '</blink>');
};

var addRoom  = function() {};


var app = {
  init: init,
  send: send,
  fetch: fetch,
  clearMessages: clearMessages,
  addMessage: addMessage,
  addRoom: addRoom
}
// YOUR CODE HERE:

