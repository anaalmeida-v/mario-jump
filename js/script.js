const mario = document.querySelector('.mario')/*retorna o primeiro Element dentro do documento que corresponde ao seletor.Se nada for encontrado será retornado null*/
const pipe = document.querySelector('.pipe')
let jumps = 0;
let level = 1;
let points = 0;
let initialSpeed = 1.6;


const jump = () => {
    const map = [
        {
            time: '1.8',
            mult: 1,
            point: 10,
        },
        {
            time: '1.7',
            mult: 2,
            point: 10,
        }
    ];

    mario.classList.add('jump')//add class

    jumps++;
    let level = Math.ceil(jumps / 2);
    points += 2 * level;
    console.log(jumps);
    console.log(points);
    console.log(level);
    pipe.style.animationduration = `${initialSpeed - (level * (2 / 20))}s`;

    //let pontuacao = `Level:${level} Pontuação:${pontucao}`
    //document.getElementById('exibirpontuacao').innerHTML = level, pontuacao

    /*document.getElementById("exibirpontuacao").style.left = '10px'
        document.getElementById("exibirpontuacao").style.top = '10px'
        document.getElementById("exibirpontuacao").style.textAlign = 'end'
        document.getElementById("exibirpontuacao").style.fontSize = '14px'*/

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)//após 500milissegundos, a função será executada
}


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft//deslocamento esquerdo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')//estilo computado na imagem do mário
    //+ - define um valor numérico
    //replace() - substitui valores
    /*if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80) {//condicao para gameover
        console.log(pipePosition);
        pipe.style.animation = 'none'//animacao vai parar
        pipe.style.left = `${pipePosition}px`//valor left será o de quando o mario bater no objeto

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`//mario vai parar qnd bater no cubo

        mario.src = 'img/game-over.png'//insercao da img de gameover
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        //FORMATACOES IMG GAMEOVER

        clearInterval(loop) //parar aplicacao    para nao ser um loop infinito
    }*/
}, 2)

document.addEventListener('keydown', jump)//Adicione um evento click ao documento
