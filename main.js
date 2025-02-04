// Function to display the current UTC time
function displayUTCTime() {
  const now = new Date().toUTCString().replace("GMT", "UTC");
  document.querySelector("#utc-time").textContent = now;
}

// Set the UTC time when the page loads
window.addEventListener('load', displayUTCTime);
