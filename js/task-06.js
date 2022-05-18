const refs = {
    inputItem: document.querySelector('#validation-input'),
};

refs.inputItem.addEventListener('blur', changeStyle);


function changeStyle(event) {
    if(refs.inputItem.classList.contains('invalid')) {
        refs.inputItem.classList.remove('invalid');
    }

    if ((Number(refs.inputItem.dataset.length)) === event.currentTarget.value.length) {
        refs.inputItem.classList.add('valid');
    } else {
        refs.inputItem.classList.add('invalid');
    }
};


