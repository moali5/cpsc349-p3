let TOTAL_AI = 0
let T0TAL_HUMAN = 0

const btn1 = document.querySelector('.button1')

btn1.addEventListener('click', () => {
  window.location.assign('/index.html')
})

const btn2 = document.querySelector('.button2')

btn2.addEventListener('click', () => {
  window.location.assign('/aboutus.html')
})

const btn3 = document.querySelector('.button3')

btn3.addEventListener('click', () => {
  window.location.assign('/game.html')
})

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const winMess = document.querySelector('.winMessage')

rock.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1

  if (computer === 1) {
    TOTAL_AI = 1
    T0TAL_HUMAN += 1
    winMess.textContent = 'Its a Draw'
  } else if (computer === 2) {
    T0TAL_HUMAN += 2
    winMess.textContent = 'you Win'
  } else if (computer === 3) {
    TOTAL_AI = 2
    winMess.textContent = 'you loose'
  }
})

paper.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1

  if (computer === 2) {
    TOTAL_AI = 1
    T0TAL_HUMAN += 1
    winMess.textContent = 'Its a Draw'
  } else if (computer === 1) {
    T0TAL_HUMAN += 2
    winMess.textContent = 'you Win'
  } else if (computer === 3) {
    TOTAL_AI = 2
    winMess.textContent = 'you loose'
  }
})

scissor.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1

  if (computer === 3) {
    TOTAL_AI = 1
    T0TAL_HUMAN += 1
    winMess.textContent = 'Its a Draw'
  } else if (computer === 2) {
    T0TAL_HUMAN += 2
    winMess.textContent = 'you Win'
  } else if (computer === 1) {
    TOTAL_AI = 2
    winMess.textContent = 'you loose'
  }
})
