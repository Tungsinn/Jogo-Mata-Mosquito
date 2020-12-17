var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

// recupera da url tudo que está à direta do ?
// isso determina o nível selecionado pelo usuário
// cujo tempo é reduzido conforme a dificuldade
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
    criaMosquitoTempo = 700
}

// Ajusta as variáveis ao tamanho da tela
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()

// Decrementa tempo a cada 1 segundo
// Ao final do tempo, limpa as funções do cronômetro e de criar moscas da
// memória e declara a vitória
var cronometro = setInterval(function() {
    tempo--
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {
    // Remover mosquito anterior caso exista
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // Seleciona o elemento v (1, 2 ou 3) e altera a imagem para
        // coracao_vazio
        // Se v > 3, GAME OVER
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }
    
    // Gera posições randômicas para o mosquito na tela
    // Math.floor() para arrendondar as casas decimais
    // -90 para que a posição não seja muito próxima das bordas da tela
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // Evitando gerar posições negativas
    // Posição recebe 0 se < 0, caso contrário, recebe ela mesma
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar o elemento HTML dinamicamente
    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png"
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    // Produz valores entre 0 e 2
    var classe = Math.floor(Math.random() * 3)

    // Retorna o nome da classe que será aplicada ao elemento 'mosquito'
    switch(classe) {
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
        // Produz valores entre 0 e 1
        var classe = Math.floor(Math.random() * 2)

        // Retorna o nome da classe que será aplicada ao elemento 'mosquito'
        switch(classe) {
            case 0:
                return 'ladoA'
            
            case 1:
                return 'ladoB'
        }
}