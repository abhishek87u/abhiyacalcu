const display = document.getElementById("display");
let currentInput = "";
const defaultText = "Welcome! Abhishek Pandey here, how can I help you?";

function updateDisplay() {
  display.classList.remove("result-zoom-out");
  display.innerText = currentInput || defaultText;
  if (!currentInput) display.classList.add("animated-text");
}


document.querySelectorAll("button[data-value]").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      updateDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      currentInput += value;
      display.classList.remove("animated-text");
      updateDisplay();
    }
  });
});


function calculate() {
  try {
    currentInput = currentInput
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/\^/g, "**");

    currentInput = eval(currentInput).toString();
    display.classList.add("result-zoom-out"); 
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}

function setTheme(theme) {
  if (theme === 'default') {
    document.documentElement.style.setProperty('--theme-background', '#333');
    document.documentElement.style.setProperty('--theme-button', '#2a2a2a');
    document.documentElement.style.setProperty('--theme-operator', '#ff8800');
    document.documentElement.style.setProperty('--theme-equal', '#00cc77');
  } else if (theme === 'blue') {
    document.documentElement.style.setProperty('--theme-background', '#1a2a40');
    document.documentElement.style.setProperty('--theme-button', '#2e3b5f');
    document.documentElement.style.setProperty('--theme-operator', '#007bff');
    document.documentElement.style.setProperty('--theme-equal', '#0056b3');
  } else if (theme === 'purple') {
    document.documentElement.style.setProperty('--theme-background', '#2d2a44');
    document.documentElement.style.setProperty('--theme-button', '#453a67');
    document.documentElement.style.setProperty('--theme-operator', '#6f42c1');
    document.documentElement.style.setProperty('--theme-equal', '#4e34a3');
  } else if (theme === 'green') {
    document.documentElement.style.setProperty('--theme-background', '#2a3a2d');
    document.documentElement.style.setProperty('--theme-button', '#3d5842');
    document.documentElement.style.setProperty('--theme-operator', '#28a745');
    document.documentElement.style.setProperty('--theme-equal', '#1f7b32');
  }
}

updateDisplay();
