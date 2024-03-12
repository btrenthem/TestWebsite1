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

     // Get the button element by its ID for Gallery 5
     var myButton5 = document.getElementById("Gal5");
     var galleryYT5 = document.getElementById("image-container5");
    
     // Add a click event listener to the button for Gallery 5
     myButton5.addEventListener("click", function() {
         // Toggle the visibility of the galleryYT div for Gallery 5
         if (galleryYT5.style.display === "none" || galleryYT5.style.display === "") {
             showGallery(galleryYT5); // Show the div
         } else {
             hideGallery(galleryYT5); // Hide the div
        }
    });

// Get the button element by its ID for Gallery 6
var myButton6 = document.getElementById("Gal6");
var galleryYT6 = document.getElementById("image-container6");

// Add a click event listener to the button for Gallery 6
myButton6.addEventListener("click", function() {
    // Toggle the visibility of the galleryYT div for Gallery 6
    if (galleryYT6.style.display === "none" || galleryYT6.style.display === "") {
        showGallery(galleryYT6); // Show the div
    } else {
        hideGallery(galleryYT6); // Hide the div
    }
});

// Repeat the above code block for Galleries 7, 8, 9, 10, and 11 with appropriate ID changes
var myButton7 = document.getElementById("Gal7");
var galleryYT7 = document.getElementById("image-container7");

myButton7.addEventListener("click", function() {
    if (galleryYT7.style.display === "none" || galleryYT7.style.display === "") {
        showGallery(galleryYT7);
    } else {
        hideGallery(galleryYT7);
    }
});

// Repeat the above code block for Gallery 8
var myButton8 = document.getElementById("Gal8");
var galleryYT8 = document.getElementById("image-container8");

myButton8.addEventListener("click", function() {
    if (galleryYT8.style.display === "none" || galleryYT8.style.display === "") {
        showGallery(galleryYT8);
    } else {
        hideGallery(galleryYT8);
    }
});

// Repeat the above code block for Gallery 9
var myButton9 = document.getElementById("Gal9");
var galleryYT9 = document.getElementById("image-container9");

myButton9.addEventListener("click", function() {
    if (galleryYT9.style.display === "none" || galleryYT9.style.display === "") {
        showGallery(galleryYT9);
    } else {
        hideGallery(galleryYT9);
    }
});

// Repeat the above code block for Gallery 10
var myButton10 = document.getElementById("Gal10");
var galleryYT10 = document.getElementById("image-container10");

myButton10.addEventListener("click", function() {
    if (galleryYT10.style.display === "none" || galleryYT10.style.display === "") {
        showGallery(galleryYT10);
    } else {
        hideGallery(galleryYT10);
    }
});

// Repeat the above code block for Gallery 11
var myButton11 = document.getElementById("Gal11");
var galleryYT11 = document.getElementById("image-container11");

myButton11.addEventListener("click", function() {
    if (galleryYT11.style.display === "none" || galleryYT11.style.display === "") {
        showGallery(galleryYT11);
    } else {
        hideGallery(galleryYT11);
    }
});


    // Hide the galleries on page load
    hideGallery(galleryYT1);
    hideGallery(galleryYT2);
    hideGallery(galleryYT3);
    hideGallery(galleryYT4);
    hideGallery(galleryYT5);
    hideGallery(galleryYT6);
    hideGallery(galleryYT7);
    hideGallery(galleryYT8);
    hideGallery(galleryYT9);
    hideGallery(galleryYT10);
    hideGallery(galleryYT11); //

     // Attach click event to the button
    document.getElementById('HideAll').addEventListener('click', function() {
        // Execute your hideGallery functions when the button is clicked
        hideGallery(galleryYT1);
        hideGallery(galleryYT2);
        hideGallery(galleryYT3);
        hideGallery(galleryYT4);
        hideGallery(galleryYT5);
        hideGallery(galleryYT6);
        hideGallery(galleryYT7);
        hideGallery(galleryYT8);
        hideGallery(galleryYT9);
        hideGallery(galleryYT10);
        hideGallery(galleryYT11); //
    });
};
