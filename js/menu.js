// Função para iniciar o jogo
function startGame() {
    location.href = 'game.html'
}
// Funçao para abrir o como jogar
function howPlay() {
    document.getElementById('menu').style.display = 'none'
    document.getElementById('how').style.display = 'block'
}
// Função para voltar ao menu
function voltar() {
    document.getElementById('menu').style.display = 'block'
    document.getElementById('how').style.display = 'none'
}
// Função para entrar na aba help
function help() {
    document.getElementById('menu').style.display = 'none'
    document.getElementById('help').style.display = 'block'
}
// Função para sair da aba help
function voltarHelp() {
    document.getElementById('menu').style.display = 'block'
    document.getElementById('help').style.display = 'none'
}
