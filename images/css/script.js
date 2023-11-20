// Get the section element by its ID
const specialsSection = document.getElementById('specialsSection');

// Function to change the background color of the specials section
function changeBackgroundColor() {
  // Generate a random color
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
  // Apply the random color to the background of the specials section
  specialsSection.style.backgroundColor = randomColor;
}
