altura = 0
largura = 0

// Ajusta as variáveis ao tamanho da tela
function ajustaTamanhoPalcoJogo() {
    var altura = window.innerHeight
    var largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    // Gera posições randômicas para o mosquito na tela
    // Math.floor() para arrendondar as casas decimais
    var posicaoX = Math.floor(Math.random() * largura)
    var posicaoY = Math.floor(Math.random() * altura)

    console.log(posicaoX, posicaoY)

    // Criar o elemento HTML dinamicamente
    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png"
    mosquito.className = "mosquito1"
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}