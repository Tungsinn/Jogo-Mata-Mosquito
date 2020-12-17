var altura = 0
var largura = 0
var vidas = 1

// Ajusta as variáveis ao tamanho da tela
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()

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