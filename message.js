document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Fetch public IP using an external service
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;

            // Store data in local storage
            const messageData = {
                name: name,
                message: message,
                ip: userIP,
                timestamp: new Date().toLocaleString()
            };

            // Add the message to local storage
            let messages = JSON.parse(localStorage.getItem('messages')) || [];
            messages.push(messageData);
            localStorage.setItem('messages', JSON.stringify(messages));

            document.getElementById('response').innerText = 'Message successfully sent!';
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            document.getElementById('response').innerText = 'Error sending message.';
        });
});
