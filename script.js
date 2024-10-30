// script.js

let totalAmount = 0;

document.getElementById('donationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents page refresh

  // Get the donation amount
  const amount = parseFloat(document.getElementById('amount').value);

  // Check if the input is valid
  if (!isNaN(amount) && amount > 0) {
    totalAmount += amount;
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);

    // Clear the input field
    document.getElementById('amount').value = '';
  } else {
    alert('Please enter a valid donation amount.');
  }
});

