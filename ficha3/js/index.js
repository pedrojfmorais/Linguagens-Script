'use strict';
// ------------------------
// Variáveis Globais
// ------------------------
const panelControl = document.querySelector('#panel-control');
const panelGame = document.querySelector('#panel-game');
const btLevel = document.querySelector('#btLevel');

const cardsLogos = ["angular", "bootstrap", "html", "javascript", "vue", "svelte", 
                    "react", "css", "backbone", "ember"]

// ------------------------
// Funções Lógica do Jogo
// ------------------------




// ------------------------
// Funções Genéricas
// ------------------------
const shuffleArray = array => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        const temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    } 
}

function reset() {
    btLevel.value = 1;
    startGame();
}
function startGame() {
    btLevel.disabled = true;
    btPlay.textContent = 'Terminar Jogo';

    
    let cards = panelGame.querySelectorAll('.card');

    for (const card of cards) {
        card.style.order = Math.floor(Math.random() * cards.length) + 1;
    }

    shuffleArray(cardsLogos);

    let newCardsLogos = cardsLogos.slice(0, 3);
    
    newCardsLogos = [...newCardsLogos, ...newCardsLogos];
    
    let i = 0;
    for (const card of cards) {
        card.dataset.logo = newCardsLogos[i];
        let img = card.querySelector('.card-front');
        img.src = 'images/' + newCardsLogos[i] + '.png';
        i++;
    }

    cards.forEach(card => {
        card.addEventListener('click', function(e){
            flipCard(e.currentTarget)
        });
    });

    cards.forEach(card => {
        card.addEventListener('mouseover', function(e){
            e.currentTarget.classList.add('cardHover');
        });
    });

    cards.forEach(card => {
        card.addEventListener('mouseout', function(e){
            e.currentTarget.classList.remove('cardHover');
        });
    });

    //showCards(cards);
}

function stopGame() {
    btPlay.textContent = 'Iniciar Jogo'
}

reset();

// function showCards(cards){
//     for (const card of cards) {
//         card.classList.add('flipped');
//     }
// }

function flipCard(c = this){
    c.classList.add('flipped');
}

// ------------------------
// Event Listeners
// ------------------------
btPlay.addEventListener('click', function () {
    if (btPlay.textContent === 'Terminar Jogo')
        stopGame()
    else startGame();
});
