(function () {
  "use strict";

  // YOUR CODE HERE
  const stopButton = document.getElementById("stopButton");
  const slowButton = document.getElementById("slowButton");
  const goButton = document.getElementById("goButton");

  const stopLight = document.getElementById("stopLight");
  const slowLight = document.getElementById("slowLight");
  const goLight = document.getElementById("goLight");

  function toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }

  function logMouseState(event) {
    console.log(`Entered ${event.target.textContent} button`);
  }

  function logMouseLeave(event) {
    console.log(`Left ${event.target.textContent} button`);
  }

  stopButton.addEventListener("mouseenter", logMouseState);
  slowButton.addEventListener("mouseenter", logMouseState);
  goButton.addEventListener("mouseenter", logMouseState);

  stopButton.addEventListener("mouseleave", logMouseLeave);
  slowButton.addEventListener("mouseleave", logMouseLeave);
  goButton.addEventListener("mouseleave", logMouseLeave);

  stopButton.addEventListener("click", function () {
    toggleClass(stopLight, "stop");
  });
  slowButton.addEventListener("click", function () {
    toggleClass(slowLight, "slow");
  });
  goButton.addEventListener("click", function () {
    toggleClass(goLight, "go");
  });
})();
