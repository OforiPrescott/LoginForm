// Get the login box element
const loginBox = document.querySelector(".login-box");

// Function to set the class for different screen sizes
function setScreenSizeClass() {
  if (window.innerWidth < 500) {
    loginBox.classList.add("small-screen");
  } else {
    loginBox.classList.remove("small-screen");
  }
}

// Call the function on page load
setScreenSizeClass();

// Call the function on window resize
window.addEventListener("resize", setScreenSizeClass);
