function startGame() {
    location.href = 'game.html'
}
function howPlay() {
    document.getElementById('menu').style.display = 'none'
    document.getElementById('how').style.display = 'block'
}
function voltar() {
    document.getElementById('menu').style.display = 'block'
    document.getElementById('how').style.display = 'none'
}
function help() {
    document.getElementById('menu').style.display = 'none'
    document.getElementById('help').style.display = 'block'
}
function voltarHelp() {
    document.getElementById('menu').style.display = 'block'
    document.getElementById('help').style.display = 'none'
}
