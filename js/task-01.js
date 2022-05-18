const allItems = (document.querySelectorAll('#categories li.item'));
const message1 = `Number of categories: ${allItems.length}`;
console.log(message1);

const showItems = (items => {
    items.forEach(item => {
        const heading = item.querySelector('h2');
        console.log(`Category: ${heading.textContent}`);

        const allLiWithin = (item.querySelectorAll('li')).length;
        console.log(`Elements: ${allLiWithin}`);
    })
});

showItems(allItems);
