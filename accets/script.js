// Nav bar 
// This function toggles the visibility of the navigation bar.
// It checks if the navigation bar currently has the class "navbar".
// If it does, it adds the class "responsive" to make the navigation bar more responsive.
// If it doesn't, it sets the class of the navigation bar to "navbar", which hides the navigation bar.
function toggleNavbar() {
    // Get the navigation bar element from the HTML document
    var navbarElement = document.querySelector(".navbar");

    // Check if the navigation bar currently has the class "navbar"
    if (navbarElement.className === "navbar") {
        // If it does, add the class "responsive" to make the navigation bar more responsive
        navbarElement.className += " responsive";
    } else {
        // If it doesn't, set the class of the navigation bar to "navbar", which hides the navigation bar.
        navbarElement.className = "navbar";
    }
}