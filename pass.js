document.getElementById('guessButton').addEventListener('click', function() {
    var popupWindow = window.open('', '_blank', 'width=400,height=200');
    popupWindow.document.write('<p>Pick a number (between 1 and 10):</p>');
    popupWindow.document.write('<input type="number" id="popupNumber" min="1" max="10" required>');
    popupWindow.document.write('<button onclick="checkNumber()">Submit</button>');

    window.checkNumber = function() {
        var guessedNumber = parseInt(popupWindow.document.getElementById('popupNumber').value);

        if (guessedNumber === 3) {
            window.location.href = 'nextpage.html'; // Redirect to nextpage.html if the number is 3
        } else {
            alert("Sorry, that's not the correct number. Please try again.");
        }

        popupWindow.close();
    };
});
