let answer = 0
let a = 0
let b = 0
let h = 0

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  h = document.getElementById('h').value

  a = document.getElementById('a').value

  b = document.getElementById('b').value

  a = parseInt(a)

  b = parseInt(b)

  h = parseInt(h)

  answer = h * (a + b) * 1 / 2

  alert(answer)
}