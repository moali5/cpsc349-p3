let totalAi = 0
let totalHuman = 0

const btn1 = document.querySelector('.button1')

btn1.addEventListener('click', () => {
  window.location.assign('/cpsc349-p3/index.html')
})

const btn2 = document.querySelector('.button2')

btn2.addEventListener('click', () => {
  window.location.assign('/cpsc349-p3/aboutus.html')
})

const btn3 = document.querySelector('.button3')

btn3.addEventListener('click', () => {
  window.location.assign('/cpsc349-p3/game.html')
})

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const winMess = document.querySelector('.winMessage')

const humanScore = document.querySelector('.human-score')
const aiScore = document.querySelector('.ai-score')

rock.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1

  if (computer === 1) {
    totalAi += 1
    totalHuman += 1
    winMess.textContent = 'Its a Draw'


  } else if (computer === 2) {
    totalHuman += 2
    winMess.textContent = 'you Win'
  } else if (computer === 3) {
    totalAi += 2
    winMess.textContent = 'you loose'
  }
})

paper.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1

  if (computer === 2) {
    totalAi += 1
    totalHuman += 1
    winMess.textContent = 'Its a Draw'
  } else if (computer === 1) {
    totalHuman += 2
    winMess.textContent = 'you Win'
  } else if (computer === 3) {
    totalAi += 2
    winMess.textContent = 'you loose'
  }
})

scissor.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1

  if (computer === 3) {
    totalAi += 1
    totalHuman += 1
    winMess.textContent = 'Its a Draw'
  } else if (computer === 2) {
    totalHuman += 2
    winMess.textContent = 'you Win'
  } else if (computer === 1) {
    totalAi += 2
    winMess.textContent = 'you loose'
  }
})
