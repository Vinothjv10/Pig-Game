'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores =[0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing =true;

const switchPlayer = function()
{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
const continuePlay = function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6) +1 ;
        // console.log(dice)
    
        diceEl.classList.remove('hidden');
    
        diceEl.src = `dice-${dice}.png`;
    
        if(dice !== 1)
        {
            currentScore += dice;
            // console.log(currentScore);
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else{
            
            switchPlayer();
        }
    }
    }

btnRoll.addEventListener('click', function() {
    continuePlay();
});

btnHold.addEventListener('click', function() {
if(playing)
{

    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 10)
    {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
        switchPlayer();
    }
}   
});

btnNew.addEventListener('click', function() {

    document.getElementById('current--0').textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;

    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');

    playing = true;

    scores[1]=0;
    scores[0]=0;
    currentScore = 0;
    activePlayer = 0;

});