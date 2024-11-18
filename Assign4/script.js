document.addEventListener("DOMContentLoaded", () => {
    const evaluateButton = document.getElementById("evaluateButton");
    const marksInput = document.getElementById("marksInput");
    const result = document.getElementById("result");
  
    evaluateButton.addEventListener("click", () => {
      const marks = parseFloat(marksInput.value);
  
      if (isNaN(marks)) {
        result.innerHTML = `
          <p class="text-red-500 font-semibold">⚠️ Please enter a valid number.</p>
        `;
      } else if (marks >= 70) {
        result.innerHTML = `
          <p class="text-green-600 font-bold text-xl animate-bounce">🎉 Competent 🎉</p>
          <p class="text-gray-600 mt-2">Excellent work! Keep it up! 👏</p>
        `;
      } else {
        result.innerHTML = `
          <p class="text-blue-600 font-bold text-xl">😔 NYC</p>
          <p class="text-gray-600 mt-2">Not Yet Competent. Try harder next time!</p>
        `;
      }
    });
  });
  