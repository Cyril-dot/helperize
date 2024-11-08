// Function to toggle the display of feature info
function toggleInfo(featureId) {
    const featureInfo = document.getElementById(featureId);
    
    if (featureInfo.style.display === "block") {
        featureInfo.style.display = "none";
    } else {
        featureInfo.style.display = "block";
    }
}
