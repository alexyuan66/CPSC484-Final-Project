//
// Health bar
//

function tohex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
  
// Get the health bar element
const healthBar = document.getElementById("health-bar");
const totalHealth = document.getElementById("total-health");
const speech = document.getElementById("speech-bubble");
console.log(speech);

// Check if the user has a saved health value in local storage
let currentHealth = localStorage.getItem("health");
if (currentHealth) {
  console.log(currentHealth);
  if(currentHealth == 100) {
    // If a saved value exists, set the health bar to that value
    healthBar.style.backgroundColor = "#00ff00";
    healthBar.style.width = `${currentHealth}%`;
    totalHealth.textContent = currentHealth +"/100";
    speech.textContent = "You did it!";
    localStorage.setItem("health", 0);
  }
  else {
    speech.textContent = "Only " +(100-currentHealth) +" to Go!";
    // If a saved value exists, set the health bar to that value
    healthBar.style.backgroundColor = "#00ff00";
    healthBar.style.width = `${currentHealth}%`;
    totalHealth.textContent = currentHealth +"/100";
    localStorage.setItem("health", currentHealth);
  }
} else {
  // Otherwise, start the health bar at 100%
  healthBar.style.width = "0%";
  currentHealth = 0;
  totalHealth.textContent = currentHealth +"/100";
  speech.textContent = "Only " +(100-currentHealth) +" to Go!";
  localStorage.setItem("health", 0);
}