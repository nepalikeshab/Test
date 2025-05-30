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

        function updateTime() {
            const date = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const time = date.toLocaleTimeString();
            const day = date.toLocaleDateString(undefined, options);
            document.getElementById('clock').innerHTML =
                `Today is: ${day}, Current Time: ${time}`;
        }

        setInterval(updateTime, 1000);
        updateTime();
});
