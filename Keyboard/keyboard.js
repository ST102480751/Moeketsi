document.addEventListener("DOMContentLoaded", function() { // Wait for the entire document to load before running the script
    const inputField = document.getElementById('inputField'); // Reference the input field by its ID
    const keyboard = document.getElementById('keyboard'); // Reference the keyboard div by its ID
    const keys = document.querySelectorAll('.key'); // Reference all elements with the class 'key'

    inputField.addEventListener('focus', () => { // Add an event listener for when the input field gains focus
        keyboard.classList.remove('hidden'); // Remove the 'hidden' class to display the keyboard
    });

    keys.forEach(key => { // Loop through each key element
        key.addEventListener('click', (e) => { // Add a click event listener to each key
            if (key.id === 'backspace') { // If the key is the backspace key
                inputField.value = inputField.value.slice(0, -1); // Remove the last character from the input field
            } else if (key.id === 'space') { // If the key is the space key
                inputField.value += ' '; // Add a space to the input field
            } else { // For all other keys
                inputField.value += key.textContent; // Append the key's text content to the input field
            }
        });
    });

    document.addEventListener('click', (e) => { // Add a click event listener to the entire document
        if (e.target !== inputField && !keyboard.contains(e.target)) { // If the click is outside the input field and the keyboard
            keyboard.classList.add('hidden'); // Add the 'hidden' class to hide the keyboard
        }
    });
});