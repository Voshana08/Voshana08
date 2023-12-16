const player1button = document.querySelector("#p1button")
const player2button = document.querySelector("#p2button")
const p1display = document.querySelector('#p1display')
const p2display = document.querySelector('#p2display')
const resetButton = document.querySelector("#reset")
const winningScoreSelect = document.querySelector('#playto')


let p1score = 0;
let p2score = 0;
let winningscore = 3
let isgameover = false;

player1button.addEventListener('click', function () {
    if (!isgameover) {
        p1score++
        if (p1score === winningscore) {
            isgameover = true
            player1button.disabled =true
            player2button.disabled = true 
            p1display.classList.add('.winningscore');
        }
        p1display.textContent = p1score
    }

})

player2button.addEventListener('click', function () {
    if (!isgameover) {
        p2score++
        if (p2score === winningscore) {
            isgameover = true
            player1button.disabled =true
            player2button.disabled = true 
            p2display.classList.add('.winningscore');
        }
        p2display.textContent = p2score

    }

})

winningScoreSelect.addEventListener('change',function(){
   winningscore= parseInt(this.value)
   reset()
})

resetButton.addEventListener('click',reset)

function reset(){
    isgameover = false
    p1score = 0
    p2score = 0 
    p1display.textContent = p1score
    p2display.textContent = p2score
}