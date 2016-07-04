"use strict";

(function() {

  function generate() {

    document.querySelectorAll(".star").forEach(function(item) {
      item.parentNode.removeChild(item);
    });

    var amount = 200;
    var ii = amount - 1;

    var min = 1;
    var max = 2;

    for (; ii >= 0; --ii) {
      var size = (Math.floor(Math.random() * max) + min);
      var left = Math.floor(Math.random() * (window.innerWidth - size));
      var top = (Math.floor(Math.random() * (window.innerHeight - size)));
      var star = document.createElement("div");
      star.className = "star";
      var style = (
        "width:" + size +
        "px; height:" + size +
        "px; left:" + left +
        "px; top:" + top +
        "px;"
      );
      star.setAttribute("style", style);

      var timer = parseFloat(((Math.random() * 8) + 4).toFixed(1));

      star.style.webkitAnimation = "pulsate " + timer + "s" + " ease-out";
      star.style.webkitAnimationDuration = timer + "s";
      star.style.animationIterationCount = "infinite";

      document.body.appendChild(star);

    };

  };

  window.addEventListener('resize', generate, false);

  generate();

})();