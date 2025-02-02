// Function to update the UTC time
function updateUTC() {
  const utcTime = new Date().toISOString();
  document.getElementById('utc-time').innerText = utcTime;
}

// Update the UTC time on page load
window.onload = updateUTC;
