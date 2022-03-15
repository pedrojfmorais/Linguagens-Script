'use strict';

const message = document.getElementById('message');
const panel_control = document.getElementById('panel-control');
const panel_game = document.getElementById('panel-game');
const btLevel = document.getElementById('btLevel');
const btPlay = document.getElementById('btPlay');

btLevel.addEventListener('change', reset);

function reset() {
    message.textContent = "";
    message.classList.remove('hide');

    let allGameStarted = document.querySelectorAll('.gameStarted');
    for (const elementGameStarted of allGameStarted) {
        elementGameStarted.classList.add('hide');
    }

    if(btLevel.value == 0){
        btPlay.disabled = true;
        panel_game.style.display = 'none';
    }
    else{
        btPlay.disabled = false;
        panel_game.style.display = 'grid';
    }
}

btPlay.addEventListener('click', function(){
    if(btPlay.textContent == "Terminar Jogo")
        stopGame();
    else
        startGame();

});

function startGame() {
    btPlay.textContent = "Terminar Jogo";
    btLevel.disabled = true;

    let allGameStarted = document.querySelectorAll('.gameStarted');
    for (const elementGameStarted of allGameStarted) {
        elementGameStarted.classList.remove('hide');
    }

    message.classList.add('hide');
}

function stopGame() {
    btPlay.textContent = "Iniciar Jogo";
    btLevel.disabled = false;
    reset();
}

panel_game.addEventListener('click', function(){

    if(btPlay.textContent != "Terminar Jogo"){
        message.textContent = "Clique em Iniciar Jogo!";
    }
});

reset();