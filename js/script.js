// Iniciando variaveis de pulo, do cano, do mario e pontos
let pulou = false
const pipe = document.getElementById('pipe')
let mario = document.getElementById('mario')
let pontos = 0

// uma function para pegar a letra, verificar se a tecla apertada é a 32, no caso, o space, e efetuar o pulo
let pegarLetra = () => {

    function teclando() {
        // Pegando o evento keycode
        let teclaPega = event.keyCode
        // Verificando se a tecla pega é a 32 e se o usuario já pulou
        if(teclaPega == 32 && pulou == false) {
            mario.className = 'mario pulo'
            pulou = true
            // Caso entre nessa condição, depois de 1 segundo, o mario cai e pode pular novamente
            setTimeout(() => {
                mario.className = 'mario'
                pulou = false
            }, 1000);
        }
    }
    // atribuindo ao body, o evento onkeypress, recebendo a function teclado

    document.body.onkeypress = teclando;

}
// Criando variaveis da nuvem e da posição do mario
let printNuvem = true
let positionMario

// Criando um loop para fazer a verificação a cada 10 milisegundos
let loop = setInterval(() => {
    // Pegando a posição left do cano
    const pipePosition = pipe.offsetLeft
    
    // usando o try catch, para tentar pegar a posição top do mario
    try {
        positionMario = document.getElementById('mario').offsetTop
    } catch (e) {
        
    }

    // Variavel responsavel por adicionar animação no mario
    let adicionarAnimacao = true 
    // Uma condição para verificar se o mario encostou no cano
    if((pipePosition <= 85 && pipePosition >= -25) && positionMario > 305 && adicionarAnimacao == true ) {
            // Parando tudo na tela para que nada mais se mexa enquanto o game está na tela de defeat
            pipe.style.animation = 'nome'
            pipe.style.left = `${pipePosition}px`
            mario.style.animation = 'none'
            mario.style.top = `${positionMario}px`
            mario.src = 'img/game-over.png'
            mario.width = '50'
            mario.style.left = '30px'

            // Parando a contagem de pontos
            clearInterval(contarPonto)


            mostrarPontos()

            // Pegando as duas nuvens
            let nuvem1 = document.getElementById('nuvem1')
            let nuvem2 = document.getElementById('nuvem2')

            // Condição que verifica se a variavel printNuvem é true, e trava as nuvens na posição atual
            if(printNuvem) { 
                let positionNuvem1 = nuvem1.offsetLeft
                let positionNuvem2 = nuvem2.offsetLeft

                nuvem1.style.left = `${positionNuvem1}px`
                nuvem2.style.left = `${positionNuvem2}px`
                printNuvem = false
            }
            // Retira as animation da nuvem
            nuvem1.style.animation = 'none'
            nuvem2.style.animation = 'none'
            
            // Fazendo conexão com o css
            styleSheet = document.getElementById('style')
            // Criando uma animação utilizando o insertRule
            styleSheet.sheet.insertRule(`@keyframes morte {
                0% {
                    top: ${positionMario + 15}px;
                }
                25% {
                    top: ${positionMario - 40}px;
                }
                50% {
                    top: ${positionMario + 50}px;
                }
                75% {
                    top: ${positionMario + 90}px;
                }
                100% {
                    top: ${positionMario + 200}px;
                }
            }`)

            // Adicionado a animação de morte
            mario.style.animation = 'morte infinite linear 2s'

            // Remover o mario e parar o loop depois de 2 segundos
            setTimeout(() => {
                mario.remove()
                clearInterval(loop)
                document.getElementById('div-defeat').style.display = 'block'
            }, 2000);
            adicionarAnimacao = false

        
        
        
    }
}, 10);

pegarLetra()

// função para reiniciar o game
function reiniciarGame() {
    location.reload()
}
// função para fazer a contagem e mostrar na tela os pontos 
let contarPonto = setInterval(() => {
    pontos++
    document.getElementById('pontos').innerHTML = pontos
}, 3100);

let mostrarPontos = () => {
    document.getElementById('qtd-pontos').innerHTML = `Pontos: ${pontos}`
}