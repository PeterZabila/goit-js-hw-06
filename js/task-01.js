const allItemsLength = (document.querySelectorAll('li.item')).length;
const message1 = `Number of categories: ${allItemsLength}`;
console.log(message1);

const allItems = (document.querySelectorAll('li.item'));


const showItems = (items => {
    items.forEach(item => {
        const heading = item.querySelector('h2');
        console.log(`Category: ${heading.textContent}`);

        const allLiWithin = (item.querySelectorAll('li')).length;
        console.log(`Elements: ${allLiWithin}`);
    })
})

showItems(allItems);