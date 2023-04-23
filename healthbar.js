//
// Health bar
//

function tohex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
  
// Get the health bar element
const healthBar = document.getElementById("health-bar");

// Check if the user has a saved health value in local storage
let currentHealth = localStorage.getItem("health");
if (currentHealth) {
  // If a saved value exists, set the health bar to that value
  healthBar.style.width = `${currentHealth}%`;
} else {
  // Otherwise, start the health bar at 100%
  healthBar.style.width = "0%";
  currentHealth = 0;
}