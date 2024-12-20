/**
 * This script enables smooth scrolling behavior for navigation links in the header.
 * When a header link is clicked, the page will smoothly scroll to the corresponding section,
 * taking into account the height of the fixed header to ensure the section is fully visible.
 */

document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor links within the header's unordered list
    const links = document.querySelectorAll('header ul li a');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link behavior

            const targetId = this.getAttribute('href').substring(0);
            const targetSection = document.getElementById(targetId);
            console.log(targetId);

            if (targetSection) {
                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Account for the header's height
                    behavior: 'smooth'
                });
            }
        });
    }
});
