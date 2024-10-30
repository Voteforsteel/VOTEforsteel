// script.js

// Fetch the current total amount from the server on page load
fetch('/api/donation')
  .then(response => response.json())
  .then(data => {
    updateGlobalDisplay(data.totalAmount);
  })
  .catch(error => console.error('Error fetching total donation:', error));

// Function to update the global donation display
function updateGlobalDisplay(amount) {
  const globalDisplay = document.getElementById('globalTotalAmount');
  if (globalDisplay) {
    globalDisplay.textContent = amount.toFixed(2);
  }
}

// Add event listener to handle donations if the donation form exists on the page
document.addEventListener('DOMContentLoaded', function() {
  const donationForm = document.getElementById('donationForm');
  if (donationForm) {
    donationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent page refresh on form submission

      // Get the donation amount from the input field
      const amountInput = document.getElementById('amount');
      const amount = parseFloat(amountInput.value);

      // Check if the input is a valid number and greater than 0
      if (!isNaN(amount) && amount > 0) {
        // Send the donation amount to the server
        fetch('/api/donation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ amount: amount })
        })
        .then(response => response.json())
        .then(data => {
          updateGlobalDisplay(data.totalAmount); // Update display with new total
          // Clear the input field after donation
          amountInput.value = '';
        })
        .catch(error => {
          console.error('Error updating total donation:', error);
        });
      } else {
        alert('Please enter a valid donation amount.');
      }
    });
  }
});
