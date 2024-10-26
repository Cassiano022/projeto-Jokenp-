let humanScore = 0;
let machineScore = 0;

const choices = {
    pedra: '👊',
    papel: '✋',
    tesoura: '✌️'
};

function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'empate';
    }

    if (
        (humanChoice === 'pedra' && computerChoice === 'tesoura') ||
        (humanChoice === 'papel' && computerChoice === 'pedra') ||
        (humanChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        return 'humano';
    }

    return 'computador';
}

function updateScore(winner) {
    if (winner === 'humano') {
        humanScore++;
        document.getElementById('human-score').textContent = humanScore;
    } else if (winner === 'computador') {
        machineScore++;
        document.getElementById('machine-score').textContent = machineScore;
    }
}

function getResultMessage(winner, humanChoice, computerChoice) {
    if (winner === 'empate') {
        return 'Empate! 🤝';
    } else if (winner === 'humano') {
        return `Você venceu! 🎉 ${choices[humanChoice]} vence ${choices[computerChoice]}`;
    } else {
        return `Alexa venceu! 🤖 ${choices[computerChoice]} vence ${choices[humanChoice]}`;
    }
}

function playHuman(humanChoice) {
    const computerChoice = getComputerChoice();
    
    // Atualiza as escolhas na tela
    document.getElementById('player-choice-display').textContent = choices[humanChoice];
    document.getElementById('computer-choice-display').textContent = choices[computerChoice];
    
    // Determina o vencedor e atualiza o placar
    const winner = determineWinner(humanChoice, computerChoice);
    updateScore(winner);
    
    // Mostra o resultado
    const resultMessage = getResultMessage(winner, humanChoice, computerChoice);
    document.getElementById('result').textContent = resultMessage;
    
    // Adiciona classe de animação
    document.getElementById('result').classList.add('result-animation');
    setTimeout(() => {
        document.getElementById('result').classList.remove('result-animation');
    }, 1000);
}

function resetGame() {
    humanScore = 0;
    machineScore = 0;
    document.getElementById('human-score').textContent = '0';
    document.getElementById('machine-score').textContent = '0';
    document.getElementById('result').textContent = '';
    document.getElementById('player-choice-display').textContent = '?';
    document.getElementById('computer-choice-display').textContent = '?';
}

// Adiciona animação ao resultado
document.getElementById('result').style.transition = 'transform 0.3s ease-in-out';