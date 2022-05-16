const inputVal = document.querySelector('input#name-input');
const outputVal = document.querySelector('span#name-output');


const showOutput = (event) => {
   if (event.currentTarget.value === '') {
    outputVal.textContent = 'Anonymous';
   } else {
    outputVal.textContent = event.currentTarget.value;
   }
};

inputVal.addEventListener('input', showOutput);

