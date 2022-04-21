'use strict';
const panelControl = document.querySelector('#panel-control');
const panelGame = document.querySelector('#panel-game');
const btLevel = document.querySelector('#btLevel');
let cards = panelGame.querySelectorAll('.card');
const labelGameTime = document.querySelector('#gameTime');
const labelPoints = document.querySelector('#points');
const TIMEOUTGAME = 10
let timer;
let timerId;
let totalPoints;
let cardsLogos = ['angular', 'bootstrap', 'html', 'javascript', 'vue', 'svelte', 'react', 'css', 'backbone', 'ember'];
let flippedCards;
let totalFlippedCards;

let topGamers = [];

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function updatePoints(operation = '+') {
    operation === '+'
        ? totalPoints += (timer * (cards.length / 2))
        : totalPoints < 5 ? totalPoints = 0 : totalPoints -= 5;
    labelPoints.textContent = totalPoints;
}

function updateGameTime() {
    timer--;
    labelGameTime.textContent = timer + 's';
    if (timer == 0) stopGame();
}

function flipCard(selectedCard) {
    selectedCard.classList.add('flipped');
    flippedCards.push(selectedCard);
    if (flippedCards.length === 2)
        checkPair();
}
const gameOver = () => { return totalFlippedCards === cards.length; }
function checkPair() {
    let [card1, card2] = flippedCards;
    const isMatch = (card1.dataset.logo === card2.dataset.logo);
    if (isMatch) {
        setTimeout(() => {
            card1.classList.add('inative');
            card2.classList.add('inative');
            card1.querySelector('.card-front').classList.add('grayscale');
            card2.querySelector('.card-front').classList.add('grayscale');
            totalFlippedCards += 2;
            updatePoints('+');
            if (gameOver()) stopGame();
        }, 500);
    }
    else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            createEventListenerFlipCard(card1);
            createEventListenerFlipCard(card2);
            updatePoints('-');
        }, 500);
    }
    flippedCards = [];
}
const createAndShuffleCards = array => {
    shuffleArray(array);
    array.splice(cards.length / 2, Number.MAX_VALUE);
    array.push(...array);
    shuffleArray(array)
}
function startGame() {
    getTopPoints();
    btPlay.textContent = 'Terminar Jogo';
    let [indice, newCardLogos] = [0, [...cardsLogos]];
    createAndShuffleCards(newCardLogos);
    cards.forEach(card => {
        card.querySelector('.card-front').src = `images/${newCardLogos[indice]}.png`;
        card.dataset.logo = newCardLogos[indice++];
        createEventListenerFlipCard(card);
    });
    [flippedCards, totalFlippedCards, totalPoints] = [[], 0, 0];
    [timer, timerId] = [TIMEOUTGAME, setInterval(updateGameTime, 1000)];
}
function stopGame() {
    checkTop10();
    clearInterval(timerId);
    modalGameOver.style.display = 'block';
    document.querySelector('#messageGameOver').textContent = 'Pontuação: ' + totalPoints;
    btPlay.textContent = 'Iniciar Jogo';
}
function reset() {
    btLevel.value = 1;
    btLevel.disabled = true;
    createPanelGame();
    labelGameTime.textContent = TIMEOUTGAME + "s";
    labelPoints.textContent = 0;
}
btPlay.addEventListener('click', function () {
    if (btPlay.textContent === 'Terminar Jogo')
        stopGame()
    else startGame();
});
const createEventListenerFlipCard = (c) => {
    c.addEventListener('click', function fc() {
        flipCard(this);
    }, { once: true });
}
function createPanelGame() {
    const backupCards = [...cards];
    panelGame.innerHTML = "";
    backupCards.forEach(c => {
        c.className = ""; c.classList.add('card');
        c.querySelector('.card-front').classList.remove('grayscale');
        panelGame.appendChild(c.cloneNode(true));
    });
    cards = panelGame.childNodes;
}

function getTop10(){
    
    let infoTop = document.getElementById('infoTop');

    infoTop.innerHTML = "";

    let div = document.createElement('div');

    let nicknameText = document.createElement('p');
    nicknameText.textContent = "Nick Name";

    let pointsText = document.createElement('p');
    pointsText.textContent = "Pontuação";

    div.appendChild(nicknameText); 
    div.appendChild(pointsText); 

    infoTop.appendChild(div.cloneNode(true));

    for (let index = 0; index < topGamers.length; index++) {
        // //infoTop.innerHTML += topGamers[index].nickname + " - " + topGamers[index].points + "<br>";
    
        // let divJogadores = document.createElement('div');

        // let nicknameJogador = document.createElement('p');
        // nicknameJogador.textContent = topGamers[index].nickname;

        // let pointsJogador = document.createElement('p');
        // pointsJogador.textContent = topGamers[index].points;

        // divJogadores.appendChild(nicknameJogador); 
        // divJogadores.appendChild(pointsJogador); 
        
        // infoTop.appendChild(divJogadores.cloneNode(true));

        div.firstChild.textContent = topGamers[index].nickname;
        div.lastChild.textContent = topGamers[index].points;

        infoTop.appendChild(div.cloneNode(true));
    }
}

function getTopPoints(){
    if(topGamers.length > 0)
        document.getElementById('pointsTop').textContent = topGamers[0].points;
}

function getLastPoints(){
    return topGamers[topGamers.length-1].points;
}

function checkTop10(){
    if(topGamers.length < 10 || getLastPoints() < totalPoints){
        let nick = document.getElementById('nickname');
        nick.style.display = 'block';
        document.getElementById('messageGameOver').innerHTML += '<br>Parabéns! Entrou no TOP 10!';
    }
}

function saveTop10(){
    let novo = {
        nickname: document.getElementById('inputNick').value,
        points: totalPoints
    }

    let existe = false;

    topGamers = topGamers.map( (elementoJogador) => {
        if(elementoJogador.nickname == novo.nickname && novo.points > elementoJogador.points){

            existe = true;    
            return novo;
        }

        return elementoJogador;
    });

    if(!existe)
        topGamers.push(novo);

    topGamers.sort(function (a, b) { return b.points - a.points });
console.log(topGamers);
    if(topGamers.length > 10)
        topGamers.pop();

    localStorage.setItem('nickname', novo.nickname);
    localStorage.setItem('top10', JSON.stringify(topGamers));
}

(function(){
    let x = localStorage.getItem('top10');
    if( x != null)
        topGamers = JSON.parse(x);
})();

btTop.addEventListener("click", getTop10);

document.getElementById('okTop').addEventListener("click", saveTop10);
document.getElementById('okTop').addEventListener("click", () => modalGameOver.style.display = 'none');
document.getElementById('okTop').addEventListener("click", reset);

reset();