

// Toggle the dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("myDropdown");
    const settingsButton = document.querySelector(".settingsButton");

    // Check if the click is outside the dropdown and settings button
    if (!dropdown.contains(event.target) && !settingsButton.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});

function Expand(tile) {
    // Expand the tile
    tile.style.height = "300px"; // Adjust height to accommodate text

    const text = tile.querySelector("p");
    text.style.display = "block"; // Show the text
}

function Collapse(tile) {
    // Collapse the tile
    tile.style.height = "220px"; // Reset to original height

    const text = tile.querySelector("p");
    text.style.display = "none"; // Hide the text
}

function Expand2(tile) {
    // Expand the tile
    tile.style.height = "320px"; // Adjust height to accommodate text

    const text = tile.querySelector("p");
    text.style.display = "block"; // Show the text
}

function Collapse2(tile) {
    // Collapse the tile
    tile.style.height = "220px"; // Reset to original height

    const text = tile.querySelector("p");
    text.style.display = "none"; // Hide the text
}


function promptFileUpload() {
    const input = document.createElement('input'); // Create an input element
    input.type = 'file'; // Set it to file type
    input.style.display = 'none'; // Hide it
    
    // Append the input element to the body (temporarily)
    document.body.appendChild(input);
    
    // Trigger the click event to prompt the file dialog
    input.click();
    
    // Handle the file selection
    input.addEventListener('change', function(event) {
      const file = event.target.files[0]; // Get the selected file
      console.log('File selected:', file);
      
      // Remove the input element after file is selected
      document.body.removeChild(input);
    });
  }
  
  // Trigger the function on a button click
  document.getElementById('upload-btn').addEventListener('click', promptFileUpload);
  
  document.getElementById('Upload').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Update the img src with the uploaded image
            document.getElementById('uploaded-image').src = e.target.result;
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    }
});

