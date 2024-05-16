// Function to store form data
function storeFormData() {
    var name = document.getElementById("nameField").value;
    var email = document.getElementById("emailField").value;
    var message = document.getElementById("messageField").value;

    // // Construct the entry string with line breaks
    // var entry = "Name: " + name + ",<br>Email: " + email + ",<br>Message: " + message;

    // // Generate a unique key for each entry
    // var key = "userEntry" + localStorage.length;

    // localStorage.setItem(key, entry);

    // API

    fetch('http://3.139.99.98:8080/formsubmit', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            message
        }),
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(() => {
        document.getElementById("displayData").textContent = "Data saved.";
        // Clear the input fields after storing the data
        document.getElementById("nameField").value = "";
        document.getElementById("emailField").value = "";
        document.getElementById("messageField").value = "";
    })
}
