// script.js
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var message = document.getElementById('message-input').value;
    fetch('/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
        // Add the new message to the message board
        var messageBoard = document.getElementById('message-board');
        var newMessage = document.createElement('p');
        newMessage.textContent = data.message;
        messageBoard.appendChild(newMessage);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
