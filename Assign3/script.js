document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById("checkButton");
    const ageInput = document.getElementById("ageInput");
    const result = document.getElementById("result");
  
    checkButton.addEventListener("click", () => {
      const age = parseInt(ageInput.value);
  
      if (isNaN(age)) {
        result.innerHTML = `<p class="text-red-500 font-semibold">Please enter a valid number.</p>`;
      } else if (age > 20) {
        result.innerHTML = `
          <p class="text-green-600 font-bold text-xl">🎉 You are an adult! 🎉</p>
        `;
      } else {
        result.innerHTML = `
          <p class="text-red-600 font-bold text-xl">🚫 You are not an adult.</p>
        `;
      }
    });
  });
  