const refs = {
    inputItem: document.querySelector('#validation-input'),
};

refs.inputItem.addEventListener('blur', changeStyle);


function changeStyle(event) {
   

    if ((Number(refs.inputItem.dataset.length)) === event.currentTarget.value.length) {
        if(refs.inputItem.classList.contains('invalid')) {
            refs.inputItem.classList.remove('invalid');
        }
        refs.inputItem.classList.add('valid');
    } else {
        if(refs.inputItem.classList.contains('valid')) {
            refs.inputItem.classList.remove('valid');
        }
        refs.inputItem.classList.add('invalid');
    }
};


