// 01 - Confirmação de jogo e inserir nome

let confirmacao = confirm('Você deseja jogar?');

    if(confirmacao === true) {

        let nome = prompt('Digite seu nome para Jogar: ');
        comecarJogo(nome);

    } else {

    }

// 02 - Função para começar jogo

    function comecarJogo(nome) {
    
        let pontuacaoJogador = 0;
        let pontuacaoMaquina = 0;
        let verificador = 0;
        
        do {
            
            // 01 - Definindo variáveis de jogada
            let jogadaUsuario = parseInt(prompt('Vamos Jogar! Tesoura: 1, Papel: 2, Pedra: 3'));
            let jogadaMaquina = Math.floor(Math.random() * 3) + 1;

            // 02 - Decisão de jogo

            if (jogadaUsuario === 1 && jogadaMaquina === 1) {
                alert(`Máquina: Pedra \n${nome}: Pedra. \nO jogo deu Velha!`);
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 2) {
                alert(`Máquina: Papel \n${nome}: Papel. \nA máquina venceu! `);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 3 && jogadaMaquina === 3) {
                alert(`Máquina: Pedra \n${nome}: Tesoura. \nA máquina venceu! `);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 1 && jogadaMaquina === 2) {
                alert(`Máquina: Pedra \n${nome}: Papel. \nA máquina venceu! `);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 3) {
                alert(`Máquina: Papel \n${nome}: Tesoura. \nA máquina venceu!`);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 3 && jogadaMaquina === 1) {
                alert(`Máquina: Tesoura \n${nome}: Pedra. \nA máquina venceu!`);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 1 && jogadaMaquina === 3) {
                alert(`Máquina: Pedra \n${nome}: Tesoura. \nO usuário ${nome} venceu!`);
                pontuacaoJogador++;
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 1) {
                alert(`Máquina: Papel \n${nome}: Pedra. \nO usuário ${nome} venceu!`);
                pontuacaoJogador++;
            } 
            else if (jogadaUsuario === 3 && jogadaMaquina === 2) {
                alert(`Máquina: Tesoura \n${nome}: Papel. \nO usuário ${nome} venceu!`);
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