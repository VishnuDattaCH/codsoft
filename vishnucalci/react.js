document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const buttons = document.querySelectorAll(".calculator button");
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const buttonText = this.textContent;
        handleInput(buttonText);
      });
    });
  
    document.addEventListener("keydown", function(event) {
      const key = event.key;
      if (key.match(/[0-9+\-*/.%]/)) {
        handleInput(key);
      } else if (key === "Backspace") {
        handleDelete();
      } else if (key === "Enter" || key === "=") {
        evaluateExpression();
      }
    });
  
    function handleInput(value) {
      if (value === "AC") {
        input.value = "";
      } else if (value === "DEL") {
        handleDelete();
      } else if (value === "=") {
        evaluateExpression();
      } else {
        input.value += value;
      }
    }
  
    function handleDelete() {
      input.value = input.value.slice(0, -1);
    }
  
    function evaluateExpression() {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
    }
  });
  