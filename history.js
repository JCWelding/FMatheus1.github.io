// Function to display all history entries
function displayHistoryEntries() {
    console.log("hi!")
    var historyEntriesDiv = document.getElementById('historyEntries');
    historyEntriesDiv.innerHTML = ''; // Clear the previous entries

    fetch('http://3.139.99.98:8080/submissions').then(d => d.json().then(j => {
        if(j.message !== 'FAIL') {
            const historyEntries = j.content;

            historyEntries.forEach(function(entry, index) {
                const entryElement = document.createElement('p');
                entryElement.innerHTML = 'Entry ' + (index + 1) + ': ' + "Name: " + entry.name + ",<br>Email: " + entry.email + ",<br>Message: " + entry.message;;
                historyEntriesDiv.appendChild(entryElement);
            });
        }
    }));
    

    


    // TODO: MAKE WORK
    // // Add click event listener to the delete history button
    // var deleteHistoryButton = document.getElementById('deleteHistoryButton');
    // deleteHistoryButton.addEventListener('click', function() {
    //     // localStorage.removeItem('historyEntries');
    //     displayHistoryEntries(); // Refresh the displayed entries
    // });
}

// Load and display all history entries when the history page loads
window.addEventListener('DOMContentLoaded', displayHistoryEntries)
