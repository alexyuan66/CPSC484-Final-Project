(function() {
    const circle = document.querySelector('.circle');
    const title = document.querySelector('.title');
    let size = 300;
  
    if (!circle || !title) {
      console.error('Cannot find required element in the DOM');
      return;
    }
  
    function breathe() {
      title.textContent = "Inhale";
      const inhaleInterval = setInterval(function() {
        size += 1;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
  
        if (size >= 300) {
          clearInterval(inhaleInterval);
          setTimeout(exhale, 2000); // wait for 2 seconds before exhaling
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
          setTimeout(breathe, 2000); // wait for 2 seconds before inhaling again
        }
      }, 10);
    }
  
    function trackCursor(e) {
      const cursor = document.querySelector('.cursor');
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  
    function goToMainMenu() {
      window.location.href = "../main-menu.html";
    }
  
    function completeBreathing() {
      window.location.href = "../main-menu.html";
    }
  
    document.addEventListener('mousemove', trackCursor);
    breathe();
  })();