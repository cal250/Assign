document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById("checkButton");
    const ageInput = document.getElementById("ageInput");
    const result = document.getElementById("result");
  
    checkButton.addEventListener("click", () => {
      const age = parseFloat(ageInput.value);
  
      if (isNaN(age)) {
        result.innerHTML = `
          <p class="text-red-500 font-semibold">⚠️ Please enter a valid number.</p>
        `;
      } else if (age > 20) {
        result.innerHTML = `
          <p class="text-green-600 font-bold text-xl animate-bounce">🎉 You are an adult! 🎉</p>
          <p class="text-gray-600 mt-2">Enjoy the responsibilities of adulthood!</p>
        `;
      } else {
        result.innerHTML = `
          <p class="text-blue-600 font-bold text-xl">🚫 You're not an adult yet.</p>
          <p class="text-gray-600 mt-2">Keep growing and learning!</p>
        `;
      }
    });
  });
  