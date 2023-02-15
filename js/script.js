let pulou = false
const pipe = document.getElementById('pipe')
let mario = document.getElementById('mario')
let pontos = 0

let pegarLetra = () => {

    function teclando() {
        let teclaPega = event.keyCode
        if(teclaPega == 32 && pulou == false) {
            mario.className = 'mario pulo'
            pulou = true
            setTimeout(() => {
                mario.className = 'mario'
                pulou = false
            }, 1000);
        }
    }

    document.body.onkeypress = teclando;

}
let printNuvem = true
let positionMario
let loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    
    try {
        positionMario = document.getElementById('mario').offsetTop
    } catch (e) {
        
    }
    let adicionarAnimacao = true 

    if((pipePosition <= 85 && pipePosition >= -25) && positionMario > 305 && adicionarAnimacao == true ) {
            pipe.style.animation = 'nome'
            pipe.style.left = `${pipePosition}px`
            mario.style.animation = 'none'
            mario.style.top = `${positionMario}px`
            mario.src = 'img/game-over.png'
            mario.width = '50'
            mario.style.left = '30px'
            
            clearInterval(contarPonto)


            mostrarPontos()

            
            let nuvem1 = document.getElementById('nuvem1')
            let nuvem2 = document.getElementById('nuvem2')

            if(printNuvem) { 
                let positionNuvem1 = nuvem1.offsetLeft
                let positionNuvem2 = nuvem2.offsetLeft

                nuvem1.style.left = `${positionNuvem1}px`
                nuvem2.style.left = `${positionNuvem2}px`
                printNuvem = false
            }
            nuvem1.style.animation = 'none'
            nuvem2.style.animation = 'none'
            

            styleSheet = document.getElementById('style')

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

            mario.style.animation = 'morte infinite linear 2s'

            setTimeout(() => {
                mario.remove()
                clearInterval(loop)
                document.getElementById('div-defeat').style.display = 'block'
            }, 2000);
            adicionarAnimacao = false

        
        
        
    }
}, 10);

pegarLetra()
function reiniciarGame() {
    location.reload()
}

let contarPonto = setInterval(() => {
    pontos++
    document.getElementById('pontos').innerHTML = pontos
}, 3100);

let mostrarPontos = () => {
    document.getElementById('qtd-pontos').innerHTML = `Pontos: ${pontos}`
}