const mario = document.querySelector('.mario')/*retorna o primeiro Element dentro do documento que corresponde ao seletor.Se nada for encontrado será retornado null*/
const pipe = document.querySelector('.pipe')
const jump = () => {
    mario.classList.add('jump')//add class

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)//após 500milissegundos, a função será executada
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft//deslocamento esquerdo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')//estilo computado na imagem do mário
    //+ - define um valor numérico
    //replace() - substitui valores
    console.log(marioPosition)
    if (pipePosition <= 120 && pipePosition>0 && marioPosition < 80) {//condicao para gameover

        pipe.style.animation = 'none'//animacao vai parar
        pipe.style.left = `${pipePosition}px`//valor left será o de quando o mario bater no objeto
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`//mario vai parar qnd bater no cubo

        mario.src = 'img/game-over.png'//insercao da img de gameover
        mario.style.width = '75px'
        mario.style.marginLeft = '50px' 
        //FORMATACOES IMG GAMEOVER

        clearInterval(loop) //parar aplicacao para nao ser um loop infinito
    }

}, 10)

document.addEventListener('keydown', jump)//Adicione um evento click ao documento
