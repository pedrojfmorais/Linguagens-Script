'use strict';


const message = document.getElementById('message');
const panelControl = document.getElementById('panel-control');
const panelGame = document.getElementById('panel-game');
const btLevel = document.getElementById('btLevel');
const btPlay = document.getElementById('btPlay');
var cards = [];
var pontuacao;
const cardsLogos = [
    "angular",
    "bootstrap",
    "html",
    "javascript",
    "vue",
    "svelte",
    "react",
    "css",
    "backbone",
    "ember"
];

var flippedCards = [];
var totalFlippedCards;


function reset() {
    if(cards.length >= 1)
        resetCards();
    let levelSelected = btLevel.value != 0;
    panelGame.style.display = levelSelected ? 'grid' : 'none';
    message.textContent = '';
    message.classList.remove("hide");
    let gameStarteds = document.querySelectorAll('.gameStarted');
    gameStarteds.forEach(function(el) { el.classList.add('hide')});
    btPlay.disabled = levelSelected ? false : true;
    
    //cards = panelGame.querySelectorAll('.card');
}
function resetCards() {
    for(var card of cards) {
        card.classList.remove('flipped');
        card.classList.remove('inative');
        card.querySelector('.card-front').classList.remove('grayscale');
    }
}

btLevel.addEventListener('change', reset);
btPlay.addEventListener('click', function(el) {
    if(this.textContent == "Terminar Jogo")
        stopGame(this);
    else
        startGame(this);
});

function startGame(element) {
    flippedCards = [];
    totalFlippedCards = 0;
    pontuacao = 0;

    document.getElementById('points').textContent = pontuacao;
    element.textContent = "Terminar Jogo";     
    btLevel.disabled = true;
    document.querySelectorAll('.gameStarted').forEach(function(el) {
        el.classList.remove('hide');
    });
    message.classList.add('hide');
    
    cards = panelGame.querySelectorAll('.card');
    for(let card of cards) {
        const randomNumber = Math.floor(Math.random() * cards.length) +1;
        card.style.order = randomNumber;
    }
    shuffleArray(cardsLogos);

    let newCardsLogos = cardsLogos.slice(0, 3);
    newCardsLogos = [...newCardsLogos, ...newCardsLogos];
    let i = 0;
    for(let card of cards) {
        card.dataset.logo = newCardsLogos[i];
        card.querySelector('.card-front').src = "images/" + newCardsLogos[i] + ".png";
        ++i;
        card.addEventListener('click', flipCard, {once: true});
        card.addEventListener('mouseover', toggleClass);
        card.addEventListener('mouseout', toggleClass);
    }
    
}
function stopGame(element) {
    element.textContent = "Iniciar Jogo";     
    btLevel.disabled = false;
    reset();
}

panelGame.addEventListener('click', function() {
    if(btLevel.disabled == false) {
        message.textContent = "Clique em Iniciar Jogo!";
        message.classList.remove('hide');
    }
});

reset();

/*function showCards(cardss) {
    for(let card of cardss) {
        card.style.order = "3";
        card.classList.add('flipped');
    }
}
showCards(panelGame.querySelectorAll('.card'));*/

function flipCard(c) {
    this.classList.add('flipped');
    flippedCards.push(this);
    //flippedCards.push(this.style.order);
    //if(flippedCards.includes(this.style.order)) {
    if(flippedCards.length >= 2) {
        checkPair();
    }
}

function toggleClass(c) {
    this.classList.toggle('cardHover');
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
}


function checkPair() {
    
    if(flippedCards[0].dataset.logo == flippedCards[1].dataset.logo) {
        console.log("Iguais");
        matchedCards(flippedCards[0], flippedCards[1]);
    }
    else {
        console.log("Não são iguais");
        unflipCards(flippedCards[0], flippedCards[1]);
    }

    flippedCards = [];
}

function matchedCards(...cards) {
    totalFlippedCards += 2;
    setTimeout(() => {
        for(var card of cards) {
            card.classList.add('inative');
            card.querySelector('.card-front').classList.add('grayscale');
        }
    }, 500);
    updateScore(true);
    if(gameOver())
        stopGame();
}
function unflipCards(...cards) {
    setTimeout(() => {
        for(var card of cards) {
            card.classList.remove('flipped');
            card.addEventListener('click', flipCard, {once: true});
        }
        updateScore(false);
    }, 500);
}
function increaseScore() {
    pontuacao += ( cards.length - totalFlippedCards ) * 2;
}
function decreaseScore() {
    if(pontuacao >= 2)
        pontuacao -= 2;
    else
        pontuacao = 0;
}
function updateScore(increase) {
    if(increase)
        increaseScore();
    else
        decreaseScore();
    document.getElementById('points').textContent = pontuacao;

}
function gameOver() {

    return totalFlippedCards == cards.length;
}
function stopGame() {
    modalGameOver.style.display = 'block';
    resetCards();
}
