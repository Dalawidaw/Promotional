// Get references to the toggle button and menu
const toggleButton = document.querySelector('.toggle-btn');
const menuBar = document.querySelector('.menu-bar');

// Add event listener to toggle the menu when the button is clicked
toggleButton.addEventListener('click', () => {
    menuBar.classList.toggle('menu-visible');  // Toggles the visibility of the menu
});

 document.getElementById('text').addEventListener("submit",function(event) {event.preventDefault();alert("Form Submitted"); 
                    // body...
        });
