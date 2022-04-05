'use strict';
// ------------------------
// Variáveis Globais
// ------------------------
const panelControl = document.querySelector('#panel-control');
const panelGame = document.querySelector('#panel-game');
const btLevel = document.querySelector('#btLevel');
let cards = panelGame.querySelectorAll('.card');


let cardsLogos = ['angular', 'bootstrap', 'html', 'javascript', 'vue', 'svelte', 'react', 'css', 'backbone', 'ember'];
let flippedCards = [];
let totalFlippedCards = 0;
let cardsListeners;

const TIMEOUTGAME = 20;
let labelGameTime = document.getElementById('gameTime');
let timer;
let timerId;

let labelPoints = document.getElementById('points');
let totalPoints;

// Algoritmo Fisher-Yates -  Algoritmo que baralha um array.
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// ------------------------
// Funções Jogo memória
// ------------------------

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
            if (gameOver()) stopGame();
        }, 500);
        updatePoints('+');
    }
    else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            createEventListenerFlipCard(card1);
            createEventListenerFlipCard(card2);
        }, 500);
        updatePoints('-');
    }
    flippedCards = [];
    
}

const createAndShuffleCards = array => {
    shuffleArray(array);
    array.splice(cards.length / 2, Number.MAX_VALUE);
    array.push(...array);
    shuffleArray(array)
}

function updateGameTime(){
    timer--;
    labelGameTime.textContent = timer;

    if(timer <= 10)
        labelGameTime.style.backgroundColor = 'red';

    if(timer <= 0)
        stopGame();
}

function updatePoints(op){
    
    if(op == '+')
        switch (btLevel.value) {
            case '1':
                totalPoints += timer * 3;
                break;
            case '2':
                totalPoints += timer * 6;
                break;
            case '3':
                totalPoints += timer * 10;
                break;
            default:
                break;
        }
    else if(op == '-')
        totalPoints -= 5;

    if(totalPoints < 0)
        totalPoints = 0;

    labelPoints.textContent = totalPoints;
}

function startGame() {
    btLevel.disabled = true;

    totalPoints = 0;
    labelPoints.textContent = totalPoints;

    timer = TIMEOUTGAME;
    labelGameTime.textContent = timer;
    timerId = setInterval(updateGameTime, 1000);

    btPlay.textContent = 'Terminar Jogo';
    let [indice, newCardLogos] = [0, [...cardsLogos]];
    createAndShuffleCards(newCardLogos);
    cards.forEach(card => {
        card.querySelector('.card-front').src = `images/${newCardLogos[indice]}.png`;
        card.dataset.logo = newCardLogos[indice++];
        createEventListenerFlipCard(card);
    });
    flippedCards = [];
    totalFlippedCards = 0;
}
 
function stopGame() {
    btLevel.disabled = false;
    btLevel.value = 1;
    document.getElementById('messageGameOver').textContent = 'Pontuação Final: ' + totalPoints;
    modalGameOver.style.display = 'block';
    btPlay.textContent = 'Iniciar Jogo';
    clearInterval(timerId);
    reset();
}

btLevel.addEventListener('change', reset);

function reset() {
    panelGame.className = '';
    labelGameTime.removeAttribute('style');
    for (let card of cards) card.classList.remove('flipped');
    createPanelGame();
}
// --------------------------------------------------------
// Event Listeners
// --------------------------------------------------------
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

const backupCards = [...cards];

function createPanelGame(){
    panelGame.innerHTML = '';

    let div = document.createElement('div'); 
    div.setAttribute('class', 'card'); 

    let imgBack = document.createElement('img'); 
    imgBack.setAttribute('src', 'images/ls.png'); 
    imgBack.setAttribute('class', 'card-back'); 

    let imgFront = document.createElement('img'); 
    imgFront.setAttribute('class', 'card-front'); 

    div.appendChild(imgBack); 
    div.appendChild(imgFront); 

    let n;
    switch (btLevel.value) {
        case '1':
            n = 6;
            panelGame.classList.add('basico');
            break;
        case '2':
            n = 12;
            panelGame.classList.add('intermedio');
            break;
        case '3':
            n = 20;
            panelGame.classList.add('avancado');
            break;
        default:
            break;
    }
    for (let index = 0; index < n; index++) {
        panelGame.appendChild(div.cloneNode(true));
    }
    cards = panelGame.childNodes;
}

btLevel.value = 1;
reset();