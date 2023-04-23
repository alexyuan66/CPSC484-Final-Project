document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
    const title = document.querySelector('.title');
    const breathCount = document.querySelector('#breath-counter');
    let size = 100;
    let breaths = 0;
    const breathsGoal = 5;
  
    function breathe() {
      title.textContent = "Inhale";
      const inhaleInterval = setInterval(function() {
        size += 1;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
  
        if (size >= 300) {
          clearInterval(inhaleInterval);
          setTimeout(exhale, 2000);
        }
      }, 10);
    }
  
    function exhale() {
      title.textContent = "Exhale";
      const exhaleInterval = setInterval(function() {
        size -= 1;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
  
        if (size <= 100) {
          clearInterval(exhaleInterval);
          breaths++;
          breathCount.textContent = breaths;
          if (breaths === breathsGoal) {
            completeBreathing();
          } else {
            setTimeout(breathe, 2000);
          }
        }
      }, 10);
    }
  
    function trackCursor(e) {
      const cursor = document.querySelector('.cursor');
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  
    document.addEventListener('mousemove', trackCursor);
    breathe();
  });
  
  function goToMainMenu() {
    window.location.href = "../main-menu.html";
  }
  
  function completeBreathing() {
    window.location.href = "../congratulations.html";
  }
  