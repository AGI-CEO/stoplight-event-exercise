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
