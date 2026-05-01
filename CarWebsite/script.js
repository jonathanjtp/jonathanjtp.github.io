// External JavaScript file for BuildThreads
// This function displays the last modified date of the page

function showLastModified() {
    // Get the last modified date of the document
    var lastMod = document.lastModified;
    
    // Get the div element by its ID
    var modifiedDiv = document.getElementById("lastModified");
    
    // Set the innerHTML of the div to display the last modified date
    modifiedDiv.innerHTML = "Last Modified: " + lastMod;
}
