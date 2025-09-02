// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the button and result div
    const loadDataBtn = document.getElementById("loadDataBtn");
    const resultDiv = document.getElementById("result");

    // Add event listener to button
    loadDataBtn.addEventListener("click", function() {
        // Simulate loading data and display the result
        resultDiv.style.display = "block"; // Make result visible
        resultDiv.innerHTML = "<p>Here is the result for MPBSE. Score: 98%</p>";
    });
});
