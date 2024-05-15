// Function to remove an entry from the form page and move it to the history page
function removeEntry(key) {
    var entry = localStorage.getItem(key);
    var historyEntries = JSON.parse(localStorage.getItem('historyEntries')) || [];
    historyEntries.push(entry);
    localStorage.setItem('historyEntries', JSON.stringify(historyEntries));

    var label = document.querySelector('label[for="' + key + '"]');
    label.style.display = 'none';
}

// Function to store form data
function storeFormData() {
    var name = document.getElementById("nameField").value;
    var email = document.getElementById("emailField").value;
    var message = document.getElementById("messageField").value;

    // Construct the entry string with line breaks
    var entry = "Name: " + name + ",<br>Email: " + email + ",<br>Message: " + message;

    // Generate a unique key for each entry
    var key = "userEntry" + localStorage.length;

    localStorage.setItem(key, entry);

    document.getElementById("displayData").textContent = "Data saved.";

    // Clear the input fields after storing the data
    document.getElementById("nameField").value = "";
    document.getElementById("emailField").value = "";
    document.getElementById("messageField").value = "";

    // Display all entries
    displayAllEntries();
}




// Function to display all stored entries
function displayAllEntries() {
    var allEntriesDiv = document.getElementById('allEntries');
    allEntriesDiv.innerHTML = ''; // Clear the previous entries

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith('userEntry')) {
            var entry = localStorage.getItem(key);
            // Replace commas with commas followed by a line break
            var formattedEntry = entry.replace(/, /g, ' ');

            // Create a checkbox
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = key;
            checkbox.onclick = function() {
                removeEntry(this.value);
            };

            // Create a label for the checkbox
            var label = document.createElement('label');
            label.htmlFor = key;
            label.style.fontSize = '30px'; // Set the font size to 20 pixels
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(formattedEntry));

            var entryElement = document.createElement('div');
            entryElement.appendChild(label);
            allEntriesDiv.appendChild(entryElement);
        }
    }
}

// Load and display all stored entries when the page loads
window.onload = function() {
    displayAllEntries();
};
