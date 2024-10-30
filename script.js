// script.js

// Retrieve the total amount from localStorage or set to 0 if not available
let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;
updateGlobalDisplay(totalAmount); // Update display on page load

// Function to update the global donation display
function updateGlobalDisplay(amount) {
  const globalDisplay = document.getElementById('globalTotalAmount');
  if (globalDisplay) {
    globalDisplay.textContent = amount.toFixed(2);
  }
}

// Add event listener to handle donations if the form exists on the page
document.addEventListener('DOMContentLoaded', function() {
  const donationForm = document.getElementById('donationForm');
  if (donationForm) {
    donationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents page refresh on form submission

      // Get the donation amount from the input field
      const amountInput = document.getElementById('amount');
      const amount = parseFloat(amountInput.value);

      // Check if the input is a valid number and greater than 0
      if (!isNaN(amount) && amount > 0) {
        totalAmount += amount; // Add donation to the total amount

        // Update the localStorage and display
        localStorage.setItem('totalAmount', totalAmount);
        updateGlobalDisplay(totalAmount); // Update display on all pages

        // Clear the input field after donation
        amountInput.value = '';
      } else {
        alert('Please enter a valid donation amount.');
      }
    });
  }
});
