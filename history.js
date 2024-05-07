// Function to display all history entries
function displayHistoryEntries() {
    var historyEntriesDiv = document.getElementById('historyEntries');
    historyEntriesDiv.innerHTML = ''; // Clear the previous entries

    var historyEntries = JSON.parse(localStorage.getItem('historyEntries')) || [];

    historyEntries.forEach(function(entry, index) {
        var entryElement = document.createElement('p');
        entryElement.textContent = 'Entry ' + (index + 1) + ': ' + entry;
        historyEntriesDiv.appendChild(entryElement);
    });

    // Add click event listener to the delete history button
    var deleteHistoryButton = document.getElementById('deleteHistoryButton');
    deleteHistoryButton.addEventListener('click', function() {
        localStorage.removeItem('historyEntries');
        displayHistoryEntries(); // Refresh the displayed entries
    });
}

// Load and display all history entries when the history page loads
window.onload = function() {
    displayHistoryEntries();
};
