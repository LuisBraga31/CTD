
function start(nome) {
    
    let pontuacaoJogador = 0;
    let pontuacaoMaquina = 0;
    let verificador = 0;
        
    do {
            
        // 01 - Definindo variáveis de jogada
            let jogadaUsuario = parseInt(prompt('Vamos Jogar! Pedra: 1, Papel: 2, Tesoura: 3'));
            let jogadaMaquina = Math.floor(Math.random() * 3) + 1;

        // 02 - Decisão de jogo

            if (jogadaUsuario === 1 && jogadaMaquina === 1) {
                alert(`${nome}: Pedra \nMáquina: Pedra. \nO jogo deu Velha!`);
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 2) {
                alert(`${nome}: Papel \nMáquina: Papel. \nO jogo deu Velha!`);
            }
            else if (jogadaUsuario === 3 && jogadaMaquina === 3) {
                alert(`${nome}: Pedra \nMáquina: Tesoura. \nO jogo deu Velha! `);
            }
            else if (jogadaUsuario === 1 && jogadaMaquina === 2) {
                alert(`${nome}: Pedra \nMáquina: Papel. \nA máquina venceu! `);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 3) {
                alert(`${nome}: Papel \nMáquina: Tesoura. \nA máquina venceu!`);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 3 && jogadaMaquina === 1) {
                alert(`${nome}: Tesoura \nMáquina: Pedra. \nA máquina venceu!`);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 1 && jogadaMaquina === 3) {
                alert(`${nome}: Pedra \nMáquina: Tesoura. \nO usuário ${nome} venceu!`);
                pontuacaoJogador++;
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 1) {
                alert(`${nome}: Papel \nMáquina: Pedra. \nO usuário ${nome} venceu!`);
                pontuacaoJogador++;
            } 
            else if (jogadaUsuario === 3 && jogadaMaquina === 2) {
                alert(`${nome}: Tesoura \nMáquina: Papel. \nO usuário ${nome} venceu!`);
                pontuacaoJogador++;
            } 
            else {
                alert('Essa opção não existe !!!');
            }

            // 03 - Verificador de Partida
            if (pontuacaoJogador === 2) {
                verificador = 1;
                alert(`O usuário ${nome} atingiu 2 pontos e venceu !!!`);
            } 
            else if ( pontuacaoMaquina === 2) {
                verificador = 1;
                alert('A máquina atingiu 2 pontos e venceu !!!');
            } else {
            }

    } while (verificador === 0); 

}

function confirmacao() {
    
    var confirmacao = confirm('Você deseja jogar?');
    
    if (confirmacao === true) {

        let nome = prompt('Digite seu nome para Jogar: ');
        start(nome);
    
        } else {
    
        alert('Obrigado pela visita!');
    
    }
}

confirmacao();


// DIFICULDADE

// FACIL

//NORMAL

// DIFICIL
