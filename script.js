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
                newLine.textContent = 'Available commands: help, date, clear, echo, ls, pwd';
                break;
            case 'date':
                newLine.textContent = new Date().toString();
                break;
            case 'clear':
                output.innerHTML = '';
                return;
            case 'echo':
                const echoText = args.slice(1).join(' ');
                newLine.textContent = echoText;
                break;
            case 'ls':
                newLine.textContent = 'file1.txt  file2.jpg  documents/  music/';
                break;
            case 'pwd':
                newLine.textContent = '/home/user';
                break;
            default:
                newLine.textContent = `Command not found: ${command}`;
        }

        output.appendChild(newLine);
        output.scrollTop = output.scrollHeight;
    }
});
