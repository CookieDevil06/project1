function rps() {
    let won = 0;
    let lost = 0;
    let tied = 0;

    let enteredNumberOfGames = numberOfGames();

    for (let i = 0; i < enteredNumberOfGames; i++) {
        let userChoice = askPrompt();
        let cpu = randomNumber();

        let gameResult = getGameResult(userChoice, cpu);

        if (gameResult == 'won') {
            won++;
            alert('You won! You chose ' + userChoice + ', which wins to ' + cpu + '.');
        } else if (gameResult == 'lost') {
            lost++;
            alert('You lost! You chose ' + userChoice + ', which loses to ' + cpu + '.');
        } else {
            tied++;
            alert('You tied.');
        }
    }
    
    alert('You won ' + won + ' times, you lost ' + lost + ' times, and you tied ' + tied + ' times.');
}

function numberOfGames() {
    let games = prompt("How many games of rock, paper, scissors would you like to play?");

    return parseInt(games, 10);
}

function askPrompt() {
    return prompt("Rock, Paper, or Scissors (enter r, p, s).");
}

function randomNumber() {
    let cpuChoice = '';
    let cpu = Math.floor(Math.random() * 3);

    // rock = 0
    // paper = 1
    // scissors = 2

    if (cpu == 0) {
        cpuChoice = 'r';
    } else if (cpu == 1) {
        cpuChoice == 'p';
    } else if (cpu == 2) {
        cpuChoice = 's';
    }

    return cpuChoice;
}

function getGameResult(userChoice, cpu) {
    let response = 'tied';

    if (userChoice === cpu) {
        response = 'tied';
    } else if (userChoice == 'r' && cpu == 'p') {
        response = 'lost'
    } else if (userChoice == 'r' && cpu == 's') {
        response = 'won'
    } else if (userChoice == 'p' && cpu == 'r') {
        response = 'won'
    } else if (userChoice == 'p' && cpu == 's') {
        response = 'lost'
    } else if (userChoice == 's' && cpu == 'r') {
        response = 'lost'
    } else if (userChoice == 's' && cpu == 'p') {
        response = 'won'
    } 

    return response;
}

