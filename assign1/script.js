document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
  
    const displayMessage = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Check if current time is less than 7:30 AM
      if (hours < 7 || (hours === 7 && minutes < 30)) {
        app.innerHTML = `
          <h1 class="text-4xl font-bold text-gray-800">Good Morning!</h1>
          <p class="text-lg text-gray-600 mt-2">Have a wonderful day ahead.</p>
        `;
      } else {
        app.innerHTML = `
          <h1 class="text-4xl font-bold text-gray-800">It's not morning anymore!</h1>
          <p class="text-lg text-gray-600 mt-2">Hope you're having a great day.</p>
        `;
      }
    };
  
    displayMessage();
  });
  