
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

const btn = document.querySelector('.button4')

function random (number) {
  return Math.floor(Math.random() * (number + 1))
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
  document.body.style.backgroundColor = rndCol
})
