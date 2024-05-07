function saveData() {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;

    // Store the input value in local storage
    localStorage.setItem('userInput', inputValue);

    // Display the stored value
    document.getElementById('displayData').textContent = `Stored value: ${inputValue}`;
}

// Load and display the stored value when the page loads
// Load and display the stored values when the page loads
window.onload = function() {
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    const storedMessage = localStorage.getItem('userMessage');

    if (storedName) {
        document.getElementById('submittedName').innerText = storedName;
    }
    if (storedEmail) {
        document.getElementById('submittedEmail').innerText = storedEmail;
    }
    if (storedMessage) {
        document.getElementById('submittedMessage').innerText = storedMessage;
    }
};

