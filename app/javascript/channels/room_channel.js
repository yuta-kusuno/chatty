import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {
  window.messageList = document.getElementById('messageList')

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
      // alert(data.content)
      // Called when there's incoming data on the websocket for this channel
      messageList.insertAdjacentHTML('beforeend', data['message'])
    }
  });
});
// speak: function() {
//   return this.perform('speak');
// }