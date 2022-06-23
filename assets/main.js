const button5 = document.querySelector("#plusFive")
// The additional buttons
const button10 = document.querySelector("#plusTen")
const button15 = document.querySelector("#plusFifteen")
const button20 = document.querySelector("#plusTwenty")

const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})
// The additional functions
// 10
button10.addEventListener('click', () => {
  disp.textContent = "added 10"
  indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
})
// 15
button15.addEventListener('click', () => {
  disp.textContent = "added 15"
  indicator.textContent = (parseInt(indicator.textContent) +15).toString()
})
// 20
button20.addEventListener('click', () => {
  disp.textContent = "added 20"
  indicator.textContent = (parseInt(indicator.textContent) +20).toString()
})