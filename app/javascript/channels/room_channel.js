import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    alert(data)
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function() {
    return this.perform('speak', {massage: 'aaaaaaaaaaaa'});
  }
});

let chatInput;
let inputData;
let content;

document.addEventListener('DOMContentLoaded', function () {
  chatInput = document.getElementById('chatInput');
  inputData = document.getElementById('inputData');
  inputData.addEventListener('click', function() {
    content = inputData.value
  });
});
