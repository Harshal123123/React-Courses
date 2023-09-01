(function () {
  // take screen the btns,then equal btn then clear btn
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (value !== undefined) {
        screen.value += value;
      }
    });
  });

  screen.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      performCalculation();
    }
  });

  equal.addEventListener("click", performCalculation);

  function performCalculation() {
    try {
      if (screen.value === "") {
        screen.value = "Please enter";
      } else {
        let answer = eval(screen.value);
        if (isNaN(answer) || !isFinite(answer)) {
          screen.value = "Invalid input";
        } else {
          screen.value = answer;
        }
      }
    } catch (error) {
      screen.value = "Error";
    }
  }

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
