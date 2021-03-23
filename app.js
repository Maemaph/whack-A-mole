// 1. List all the variables needed

const startBtn = document.querySelector('button')
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0

// 2. Create the random mola

function randomSquare(){
    const square = document.querySelectorAll('.square')
    square.forEach(className => {
        className.classList.remove('mole')
    })  
    let randomPos = square[Math.floor(Math.random() * 9)]
    randomPos.classList.add('mole')
    
    hitPosition = randomPos.id 
    
}

// 3. Hitting the mola

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

// 4. Move the mole

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)

}

// 5. The start button

startBtn.addEventListener('click', () => {
    score.textContent = 0 
    moveMole()
    let currentTime = 30
    function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
    clearInterval(timerId)
    window.addEventListener('abort', moveMole)
    alert('GAME OVER! You whaked-' + result + '-molas')
        }
    }

let timerId = setInterval(countDown, 1000)
})
