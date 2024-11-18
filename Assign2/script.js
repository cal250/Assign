document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById("checkButton");
    const marksInput = document.getElementById("marksInput");
    const result = document.getElementById("result");
  
    checkButton.addEventListener("click", () => {
      const marks = parseFloat(marksInput.value);
  
      if (isNaN(marks)) {
        result.innerHTML = `<p class="text-red-500 font-semibold">Please enter a valid number.</p>`;
      } else if (marks > 70) {
        result.innerHTML = `
          <p class="text-green-600 font-bold text-xl">🎉 Competent! 🎉</p>
          <p class="text-gray-600 mt-1">Great job! Keep up the good work.</p>
        `;
      } else {
        result.innerHTML = `
          <p class="text-red-600 font-bold text-xl">🚫 Not Competent</p>
          <p class="text-gray-600 mt-1">Don't worry, keep improving!</p>
        `;
      }
    });
  });
  