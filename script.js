console.log('Hello from script.js!');
console.log('I know 4 images are not found. This is expected.')


// Function to show the gallery
function showGallery(galleryElement) {
    galleryElement.style.display = "block";
}

// Function to hide the gallery
function hideGallery(galleryElement) {
    galleryElement.style.display = "none";
}

// Wrap the script in a window.onload function to ensure that the elements are loaded before the script runs
window.onload = function() {
    // Get the button element by its ID for Gallery 1
    var myButton1 = document.getElementById("Gal1");
    var galleryYT1 = document.getElementById("image-container1");

    // Add a click event listener to the button for Gallery 1
    myButton1.addEventListener("click", function() {
        // Toggle the visibility of the galleryYT div for Gallery 1
        if (galleryYT1.style.display === "none" || galleryYT1.style.display === "") {
            showGallery(galleryYT1); // Show the div
        } else {
            hideGallery(galleryYT1); // Hide the div
        }
    });

    // Get the button element by its ID for Gallery 2
    var myButton2 = document.getElementById("Gal2");
    var galleryYT2 = document.getElementById("image-container2");

    // Add a click event listener to the button for Gallery 2
    myButton2.addEventListener("click", function() {
        // Toggle the visibility of the galleryYT div for Gallery 2
        if (galleryYT2.style.display === "none" || galleryYT2.style.display === "") {
            showGallery(galleryYT2); // Show the div
        } else {
            hideGallery(galleryYT2); // Hide the div
        }
    });

    // Get the button element by its ID for Gallery 3
    var myButton3 = document.getElementById("Gal3");
    var galleryYT3 = document.getElementById("image-container3");

    // Add a click event listener to the button for Gallery 3
    myButton3.addEventListener("click", function() {
        // Toggle the visibility of the galleryYT div for Gallery 2
        if (galleryYT3.style.display === "none" || galleryYT3.style.display === "") {
            showGallery(galleryYT3); // Show the div
        } else {
            hideGallery(galleryYT3); // Hide the div
        }
    });

    // Get the button element by its ID for Gallery 4
    var myButton4 = document.getElementById("Gal4");
    var galleryYT4 = document.getElementById("image-container4");

    // Add a click event listener to the button for Gallery 4
    myButton4.addEventListener("click", function() {
        // Toggle the visibility of the galleryYT div for Gallery 4
        if (galleryYT4.style.display === "none" || galleryYT4.style.display === "") {
            showGallery(galleryYT4); // Show the div
        } else {
            hideGallery(galleryYT4); // Hide the div
        }
    });
    // Hide the galleries on page load
    hideGallery(galleryYT1);
    hideGallery(galleryYT2);
    hideGallery(galleryYT3);
    hideGallery(galleryYT4); //

     // Attach click event to the button
    document.getElementById('HideAll').addEventListener('click', function() {
        // Execute your hideGallery functions when the button is clicked
        hideGallery(galleryYT1);
        hideGallery(galleryYT2);
        hideGallery(galleryYT3);
        hideGallery(galleryYT4); //
    });
};
