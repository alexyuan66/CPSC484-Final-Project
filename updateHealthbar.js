//
// Updating Health bar
//

function tohex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Check if the user has a saved health value in local storage
let currentHealth = localStorage.getItem("health");

// Function to increase the health value
function increaseHealth() {
  // Increase the health value by 10%
  currentHealth = parseInt(currentHealth);
  currentHealth += 10;
  if (currentHealth > 100) {
    currentHealth = 0;
  }
  console.log(currentHealth);
  // Save the new health value to local storage
  localStorage.setItem("health", currentHealth);
}

document.addEventListener("DOMContentLoaded", function() {
  // Add event listeners to the heal and damage buttons
  document
    .getElementById("heal-button")
    .addEventListener("click", increaseHealth);
})