// Adapted from https://p5js.org/examples/interaction-snake-game.html

// Define the host to connect to
const host = "cpsc484-04.yale.internal:8888";

// When the document is ready, start the animation and the 2D canvas
$(document).ready(function() {
  frames.start();
  twod.start();
});

// Initialize the ID of the active body
let active_body_id = null;

// Define an object for handling frames from the WebSocket
const frames = {
  socket: null,

  // Start listening for WebSocket messages
  start: function() {
    // Construct the WebSocket URL
    const url = "ws://" + host + "/frames";

    // Connect to the WebSocket
    frames.socket = new WebSocket(url);

    // Listen for messages from the WebSocket
    frames.socket.onmessage = function (event) {
      // Parse the message as JSON
      const data = JSON.parse(event.data);

      // Get the command for the left wrist
      const command = frames.get_right_wrist_command(data);

      // If the command is valid, update the cursor position
      if (command !== null) {
        // let hand_x = command[0];
        // let hand_y = command[1];
        let result = map_kinect_coords_to_cursor_coords(command);
        frames.update_cursor(result);
      }
    }
  },

  // Get the command for the left wrist from a frame object
  get_right_wrist_command: function (frame) {

    const people = frame.people;
    var active_body_id_index = 0;

    // Loop over each person in the `people` array and extract the `body_id` value
    const bodyIds = [];
    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      const bodyId = person.body_id;
      bodyIds.push(bodyId);
    }

    const numPeople = bodyIds.length

    if (numPeople >= 1) {
      if (active_body_id === null || !bodyIds.includes(active_body_id)) {
        active_body_id = bodyIds[0];
      } else {
        active_body_id_index = bodyIds.indexOf(active_body_id);
      }
    }

    // console.log(`num_people=${numPeople}\tbodies=${bodyIds}\tcurrent_body=${active_body_id}\tindex=${active_body_id_index}`);


    // Initialize the command to null
    let command = null;

    // If there are no people in the frame, return null
    if (frame.people.length < 1) {
      return command;
    }

    // Get the position of the left wrist joint
    let wrist_right = frame.people[active_body_id_index].joints[14];
    let chest = frame.people[active_body_id_index].joints[2];

    // If valid, perform
    if(wrist_right.valid && chest.valid)
    {
      let chest_x = chest.pixel.x;
      let chest_y = chest.pixel.y;
      let wrist_x = wrist_right.pixel.x;
      let wrist_y = wrist_right.pixel.y;

      return {x: chest_x - wrist_x, y: chest_y-wrist_y};
    }
  },

  // Update the position of the cursor element
  update_cursor: function (result) {
    // Get the cursor element from the HTML
    const cursor = document.querySelector('.cursor');

    // Set the top and left styles of the cursor element
    cursor.style.bottom = `${result.y}px`;
    cursor.style.left = `${result.x}px`;
  }
}

// Define an object for handling 2D canvas updates from the WebSocket
const twod = {
  socket: null,

  // Start listening for WebSocket messages
  start: function() {
    // Construct the WebSocket URL
    const url = "ws://" + host + "/twod";

    // Connect to the WebSocket
    twod.socket = new WebSocket(url);

    // Listen for messages from the WebSocket
    twod.socket.onmessage = function(event) {
      // Parse the message as JSON
      const data = JSON.parse(event.data);

      // Show the 2D canvas image
      twod.show(data);
    }
  },

  // Show the 2D canvas image in the HTML
  show: function(twod) {
    // Set the source of the image element to the base64-encoded data URL from the message
    $('.twod').attr("src", 'data:image/pnjpegg;base64,'+twod.src);
  }
};

function map_kinect_coords_to_cursor_coords(wrist_pelvis_dist) {
  // Range of webpage coordinates
  const CANVAS_X_MIN = 0
  const CANVAS_X_MAX = 1920;
  const CANVAS_Y_MIN = 0
  const CANVAS_Y_MAX = 1080;

  // Range of coordinates that are input
  const KINECT_X_MIN = 25
  const KINECT_X_MAX = 200
  const KINECT_Y_MIN = -20
  const KINECT_Y_MAX = 125

  // unpack coordinates
  const kinect_x = wrist_pelvis_dist.x
  const kinect_y = wrist_pelvis_dist.y

  // map input coordinates to coordinates on screen
  let cursor_x = (kinect_x - KINECT_X_MIN) / (KINECT_X_MAX - KINECT_X_MIN) * (CANVAS_X_MAX - CANVAS_X_MIN) + CANVAS_X_MIN
  let cursor_y = (kinect_y - KINECT_Y_MIN) / (KINECT_Y_MAX - KINECT_Y_MIN) * (CANVAS_Y_MAX - CANVAS_Y_MIN) + CANVAS_Y_MIN

  // Ensure cursor doesn't go out of bounds
  if (cursor_x > CANVAS_X_MAX) {
    cursor_x = CANVAS_X_MAX;
  } else if (cursor_x < CANVAS_X_MIN) {
    cursor_x = CANVAS_X_MIN;
  }

  if (cursor_y > CANVAS_Y_MAX) {
    cursor_y = CANVAS_Y_MAX;
  } else if (cursor_y < CANVAS_Y_MIN) {
    cursor_y = CANVAS_Y_MIN;
  }

  return {x: cursor_x, y: cursor_y};
};
