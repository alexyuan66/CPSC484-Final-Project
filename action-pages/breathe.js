const circle = document.querySelector('.circle');
let size = 300;
let intervalId;
let title = document.querySelector('.title');

//Inhale
function breathe() {
  title.textContent = "Inhale";
  intervalId = setInterval(function() {
    size += 1;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';

    if (size >= 300) {
      clearInterval(intervalId);
      setTimeout(exhale, 2000); // wait for 2 seconds before exhaling
    }
  }, 10);
}

//Exhale
function exhale() {
  title.textContent = "Exhale";
  intervalId = setInterval(function() {
    size -= 1;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';

    if (size <= 100) {
      clearInterval(intervalId);
      setTimeout(breathe, 2000); // wait for 2 seconds before inhaling again
    }
  }, 10);
}

breathe(); // Start the breathing exercise

function goToMainMenu() {
    window.location.href = "../main-menu.html";
}

function completeBreathing() {
    window.location.href = "../main-menu.html";
}