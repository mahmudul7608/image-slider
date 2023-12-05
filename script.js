document.addEventListener("DOMContentLoaded", function () {
  checkInternetConnection();
});

function checkInternetConnection() {
  var statusElement = document.getElementById("status");

  // Create an image element
  var img = new Image();
  img.src = "https://www.google.com/images/phd/px.gif"; // Use a URL that is likely to be always available

  img.onload = function () {
    // Image loaded successfully, internet connection is available
    statusElement.textContent = "Internet connection is available";
  };

  img.onerror = function () {
    // Image failed to load, indicating no internet connection
    statusElement.textContent = "No internet connection";
  };
}
