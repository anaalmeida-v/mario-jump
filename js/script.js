const mario = document.querySelector('.mario')/*retorna o primeiro Element dentro do documento que corresponde ao seletor.Se nada for encontrado será retornado null*/
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameover = document.querySelector('.gameover')
const containerGameover = document.querySelector('.container-gameover')
const botaovoltar = document.querySelector('.btn')
const botaoinicio = document.querySelector('.botaoIniciar')
const pontuacaofinal = document.querySelector('.pontuacaofinal')
const nivelfim = document.querySelector('.nivelfim')
const tempo = document.getElementById('seconds')
const pontos = document.getElementById('points')
const nivel = document.getElementById('level')
const inicio = document.getElementById('iniciojogo')
let jumps = 0;
let level = 1;
let points = 0;
let initialSpeed = 1.6;
let initialTime = 0;
let initialPos = -80;
var seconds = 00000;

const counter = setInterval(() => {
    initialTime++;
    document.getElementById('seconds').textContent = 'Tempo:  ' + initialTime;
}, 1000);

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
    level = Math.ceil(jumps / 2);
    points += 2 * level;
    //pipe.style.animation = `pipe-animation 1.0s infinite linear`;
    setTimeout(() => {
        mario.classList.remove('jump')
        document.getElementById('level').textContent = 'Level : ' + level;
        document.getElementById('points').textContent = 'Pontos:  ' + points;
    }, 400)//após 500milissegundos, a função será executada
}
//exibindo pontuacao e nivel final
function pontuacaoFinal() {
    if (points <= 0) {
        pontuacaofinal.textContent = 'Voce nao tem pontos'
    }
    else {
        pontuacaofinal.textContent = 'Pontuacao Final: ' + points
    }
}

function nivelFim() {
    nivelfim.textContent = 'Nivel: ' + level
}

//loop de
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft//deslocamento esquerdo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')//estilo computado na imagem do mário
    //+ - define um valor numérico
    //replace() - substitui valores
    if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80) {//condicao para gameover
        console.log(pipePosition);
        containerGameover.classList.add('active');
        pipe.style.animation = 'none'//animacao vai parar
        pipe.style.left = `${pipePosition}px`//valor left será o de quando o mario bater no objeto

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`//mario vai parar qnd bater no cubo

        mario.src = 'img/game-over.png' //insercao da img de gameover
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clouds.style.display = 'none'
        tempo.style.display = 'none'
        pontos.style.display = 'none'
        nivel.style.display = 'none'
        gameover.src = 'img/gameover-text.png'
        botaovoltar.innerHTML = 'Voltar'
        pontuacaofinal = pontuacaoFinal()
        //FORMATACOES GAMEOVER

        clearInterval(loop) //parar aplicacao    para nao ser um loop infinito
        clearInterval(counter);
        initialTime = 0;
    }
}, 10);

setInterval(() => {
    initialPos = initialPos + (15 + level);
    pipe.style.right = `${initialPos}px`;
    if (initialPos > window.innerWidth + 100) {
        initialPos = -80;
    }
}, 17);

document.addEventListener('keydown', jump)//Adicione um evento click ao documento
