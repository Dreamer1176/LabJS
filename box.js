function reset()
{
  parent.style.backgroundColor = 'rgb(200, 129, 247)';
  child.style.backgroundColor = 'rgb(255, 182, 239)';
}

function outside1()
{
  parent.style.backgroundColor = 'blue';
}

function inside1()
{
  child.style.backgroundColor = 'gray';
}

const parent = document.querySelector('.outside')
parent.addEventListener('click', outside1)

const child = document.querySelector('.inside')
child.addEventListener('click', inside1)

const button = document.querySelector('.button')
button.addEventListener('click', reset)