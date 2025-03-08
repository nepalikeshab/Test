document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('cli-input');
    const output = document.querySelector('.output');

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
                newLine.textContent = 'I am [Your Name], a [Your Profession]. [Short Description]';
                break;
            case 'blog':
                newLine.textContent = 'Navigating to blog...';
                // Add logic to show the blog section
                break;
            case 'contact':
                newLine.textContent = 'You can contact me at [Your Email].';
                break;
            case 'projects':
                newLine.textContent = 'Listing projects...';
                // Add logic to show projects section
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

    window.navigateTo = function(page) {
        const newLine = document.createElement('div');
        newLine.textContent = `Navigating to ${page}...`;
        output.appendChild(newLine);
        output.scrollTop = output.scrollHeight;
        // Add logic to show the respective section content
    }
});
