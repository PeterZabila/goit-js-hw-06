let counterValue = 0;

const addValue = document.querySelector('button[data-action="increment"]');
const subValue = document.querySelector('button[data-action="decrement"]');
const output = document.querySelector('#value');

const plus = () => output.textContent = counterValue += 1;
const minus = () => output.textContent = counterValue -= 1;

addValue.addEventListener('click', plus);
subValue.addEventListener('click', minus);