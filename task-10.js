const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.value;
  let markup = '';

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    markup += `<div style="background-color: ${color}; width: ${size}px; height: ${size}px"></div>`;
  }

  boxesDiv.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

