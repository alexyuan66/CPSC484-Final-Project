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
  
  // Function to update the health bar with a new value
  function updateHealthBar(newHealth) {
    // Update the health bar with the new value
    healthBar.style.width = `${newHealth}%`;
  
    // Save the new health value to local storage
    localStorage.setItem("health", newHealth);
  }
  
  // Function to increase the health value
  function increaseHealth() {
    // Increase the health value by 10%
    currentHealth = parseInt(currentHealth);
    currentHealth += 10;
    if (currentHealth > 100) {
      currentHealth = 0;
    }
    // Update the health bar with the new value
    updateHealthBar(currentHealth);
  }
  
  // Function to decrease the health value
  function decreaseHealth() {
    // Decrease the health value by 10%
    currentHealth -= 10;
    if (currentHealth < 0) {
      currentHealth = 0;
    }
  
    // Update the health bar with the new value
    updateHealthBar(currentHealth);
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
  
    // Add event listeners to the heal and damage buttons
    document
      .getElementById("heal-button")
      .addEventListener("click", increaseHealth);
    document
      .getElementById("damage-button")
      .addEventListener("click", decreaseHealth);
  
  })