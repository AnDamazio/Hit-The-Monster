//Mostrar a mensagem para selecionar a dificuldade
function alertaDificuldade() {
    $('#dificuldade').modal('show')
}

//Pegar o intervalo de aparições de monstros pelo id dos botões
function getDificuldade(d) {
    let dificuldade = 0
    if(d == 1) {
        dificuldade = 1000
    }else if(d == 2){
        dificuldade = 750
    }else if(d == 3){
        dificuldade = 550
    }

    //Criação de monstros
    temporizador()
    return spawnarMonstros(dificuldade)
    
}

    //Função spawnadora de monstros
function spawnarMonstros(dificuldade) {
    let id
  setInterval(() => {
    //Limpar monstros ativos
    apagarMonstro()

    //Gerar id aleatório
        id = Math.round((Math.random() * 11) + 1) 
        console.log(id)
        document.getElementById(id).innerHTML = `<img onclick="contarPonto()" src="monster_active.png" style="width: 150px;">` 
        

    }, dificuldade);
    
}



function apagarMonstro() {
    let x = 1
    for(document.getElementById(x); x < 13; x++) {
        if(document.getElementById(x).innerHTML == `<img onclick="contarPonto()" src="monster_active.png" style="width: 150px;">`){
            document.getElementById(x).innerHTML = `<img src="monster_inactive.png" style="width: 150px;">`
        }
    }
}



let contador = 0
function contarPonto() {
    apagarMonstro()
    document.getElementById('pontos').innerHTML = 'Monstros abatidos: ' + contador
    contador++
}

function temporizador() { 
    let tempo = 0
    setInterval(() => {
        if(tempo  > 100) {
            alert('Fim de jogo!')
            location.reload()
        }
        document.getElementById('relogio').innerHTML = `Tempo de jogo: ` + tempo
        tempo ++
        }, 1000);
}



    

















