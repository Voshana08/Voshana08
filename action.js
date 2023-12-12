const player1button = document.querySelector("#p1button")
const player2button = document.querySelector("#p2button")
const p1display = document.querySelector('#p1display')
const p2display = document.querySelector('#p2display')

let p1score = 0;
let p2score = 0;
let winningscore = 5
let isgameover = false;

player1button.addEventListener('click',function(){
    if(p1score !== winningscore){
        p1score++
        p1display.textContent = p1score
    }
    
})

player2button.addEventListener('click',function(){
    if(p2score !== winningscore){
        p2score++
        p2display.textContent = p2score
    }
    
})
