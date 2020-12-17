var altura = 0
var largura = 0

// Ajusta as variáveis ao tamanho da tela
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
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
    mosquito.className = tamanhoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

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