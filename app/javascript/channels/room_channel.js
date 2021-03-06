import consumer from "./consumer"

let messageList;

document.addEventListener('turbolinks:load', () => {
  messageList = document.getElementById('messageList')

  if (messageList === null) {
    return
  }
  consumer.subscriptions.create("RoomChannel", {
    connected() {
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      messageList.insertAdjacentHTML('beforeend', data['message'])
    }
  });
});
// speak: function() {
//   return this.perform('speak');
// }