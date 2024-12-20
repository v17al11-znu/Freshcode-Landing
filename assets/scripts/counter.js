/**
 * Odometer Counter Script
 * 
 * This script manages an odometer-like counter that displays millions, thousands, and units.
 * It handles the incrementing of each section, ensures values wrap around upon reaching their
 * maximum limits, and updates the displayed digits with smooth animations. The script also
 * formats numbers with leading zeros to maintain consistent digit lengths and initializes
 * the counter upon loading without triggering animations.
 */

// Maximum values
const maxMillions = 99;
const maxThousands = 999;
const maxUnits = 999;

// Current values
let millions = 1;
let thousands = 574;
let units = 346;

// Get elements
const millionsEl = document.getElementById('counter-millions');
const thousandsEl = document.getElementById('counter-thousands');
const unitsEl = document.getElementById('counter-units');

// Function to update a single digit with animation
function updateDigit(digitContainer, newDigit, withAnim) {
    const digitInner = digitContainer.querySelector('.digit-inner');
    const currentDigit = digitInner.textContent;

    if (newDigit !== currentDigit) {
        if (withAnim) {
            digitContainer.classList.add('animate');

            // Delay for animation before changing the digit
            setTimeout(() => {
                digitInner.textContent = newDigit;
                digitContainer.classList.remove('animate');
            }, 500); // Animation duration should match the CSS transition
        } else {
            digitInner.textContent = newDigit;
            digitContainer.classList.remove('animate');
        }
    }
}

// Function to update the entire counter
function updateCounter(withAnim = true) {
    // Update values
    // units++;
    // if (units > maxUnits) {
        // units = 0;
        thousands++;
        if (thousands > maxThousands) {
            thousands = 0;
            millions++;
            if (millions > maxMillions) {
                millions = 0;
            }
        }
    // }

    // Format numbers with leading zeros
    const millionsStr = String(millions).padStart(2, '0');
    const thousandsStr = String(thousands).padStart(3, '0');
    const unitsStr = String(units).padStart(3, '0');

    // Split numbers into individual digits
    const millionsDigits = millionsStr.split('');
    const thousandsDigits = thousandsStr.split('');
    const unitsDigits = unitsStr.split('');

    // Function to update digits in a specific group
    function updateGroup(numberEl, digits) {
        const digitContainers = numberEl.querySelectorAll('.digit');
        digits.forEach((digit, index) => {
            updateDigit(digitContainers[index], digit, withAnim);
        });
    }

    // Update each group of digits
    updateGroup(millionsEl, millionsDigits);
    updateGroup(thousandsEl, thousandsDigits);
    updateGroup(unitsEl, unitsDigits);
}

// Function to increment the number (can be called from a button or another trigger)
function increment() {
    updateCounter();
}

// Initialize the counter
updateCounter(false);
