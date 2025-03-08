document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('cli-input');
    const output = document.getElementById('output');

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const userInput = input.value.trim();
            processCommand(userInput);
            input.value = '';  // Clear input
        }
    });

    function processCommand(command) {
        const newLine = document.createElement('div');

        // Split the command into parts
        const args = command.split(' ');
        const cmd = args[0].toLowerCase();

        switch(cmd) {
            case 'help':
                newLine.textContent = 'Available commands: help, whoami, blog, contact, projects, clear';
                break;
            case 'whoami':
                newLine.textContent = 'I am Keshab Nepali, a cybersecurity enthusiast.';
                break;
            case 'blog':
                newLine.textContent = 'Navigating to blog...';
                break;
            case 'contact':
                newLine.textContent = 'You can contact me at "nepalikeshav67@gmail.com".';
                break;
            case 'projects':
                newLine.textContent = 'Listing projects...';
                break;
            case 'clear':
                output.innerHTML = '';
                return;
            default:
                newLine.textContent = `Command not found: ${command}`;
        }

        output.appendChild(newLine);
        output.scrollTop = output.scrollHeight;
    }
           function updateClock() {
            const clockElement = document.getElementById('clock-time');
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            // Format the time to be two digits
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            clockElement.innerText = `${hours}:${minutes}:${seconds}`;
        }
        
        // Update the clock every second
        setInterval(updateClock, 1000);
        updateClock(); // Initial call to display time immediately
});
