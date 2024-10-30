// script.js

// Function to update the global donation display
function updateGlobalDisplay(amount) {
  const globalDisplay = document.getElementById('globalTotalAmount');
  if (globalDisplay) {
    globalDisplay.textContent = amount.toFixed(2);
  }
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize total amount from localStorage or set to 0 if no stored value exists
  let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;
  updateGlobalDisplay(totalAmount); // Initialize display on page load

  // Check if we're on the donation page by looking for the donation form
  const donationForm = document.getElementById('donationForm');
  if (donationForm) {
    donationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent page refresh on form submission

      // Get the donation amount from the input field
      const amountInput = document.getElementById('amount');
      const amount = parseFloat(amountInput.value);

      // Check if the input is a valid number and greater than 0
      if (!isNaN(amount) && amount > 0) {
        totalAmount += amount; // Update the total amount
        localStorage.setItem('totalAmount', totalAmount); // Save new total to localStorage
        updateGlobalDisplay(totalAmount); // Update display with new total

        // Clear the input field after donation
        amountInput.value = '';
      } else {
        alert('Please enter a valid donation amount.');
      }
    });
  }
});
