// Data collection

// var host = "cpsc484-04.yale.internal:8888";

$(document).ready(function () {
    // frames.start();
});

// var frames = {
//     socket: null,

//     start: function () {
//         var url = "ws://" + host + "/frames";
//         frames.socket = new WebSocket(url);
//         frames.socket.onmessage = function (event) {
//             frames.show(JSON.parse(event.data));
//         }
//     },

//     show: function (frame) {
//         console.log(frame);
//     }
// };

// Links

function redirectToJoke() {
  window.location.href = "action-pages/quotes-jokes.html";
}
function redirectToBreathe() {
  window.location.href = "action-pages/breathe.html";
}
function redirectToCheckIn() {
  window.location.href = "action-pages/check-in.html";
}
function redirectToInspiration() {
  window.location.href = "action-pages/quotes-inspirational.html";
}