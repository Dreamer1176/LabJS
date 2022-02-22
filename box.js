function reset()
{
  parent.style.backgroundColor = 'rgb(200, 129, 247)';
  child.style.backgroundColor = 'rgb(255, 182, 239)';
}

function outside()
{
  parent.style.backgroundColor = 'blue';
}

function inside()
{
  child.style.backgroundColor = 'gray';
}

const parent = document.querySelector('.outside-box')
parent.addEventListener('click', outside)

const child = document.querySelector('.inside-box')
child.addEventListener('click', inside)

const button = document.querySelector('.button')
button.addEventListener('click', reset)