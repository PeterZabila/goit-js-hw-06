function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  numberInput: document.querySelector('#controls>input'),
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    const inputVal = refs.numberInput.value;
    const boxsize = 30;

    for(let i = 0; i <= inputVal; i += 1) {
      const newEl = document.createElement("div");
        newEl.style.backgroundColor = getRandomHexColor();
        newEl.style.width = `${boxsize + i * 10}px`;
        newEl.style.height = `${boxsize + i * 10}px`;
      refs.boxes.append(newEl);
    }
};

function destroyBoxes(event) {
  refs.boxes.innerHTML = "";
  refs.numberInput.value = "";
};