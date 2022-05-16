const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const baseUl = document.querySelector('#ingredients');

const createLi = (elements) => {
 return elements.map(ingredient => {
    const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    liItem.classList.add('item');
    return liItem;
  });
}

baseUl.append(...(createLi(ingredients)));
