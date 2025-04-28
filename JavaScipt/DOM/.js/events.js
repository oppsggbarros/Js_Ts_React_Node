let count = 1;

function addItem() {
    const item = document.createElement('li');
    const list = document.querySelector('ol');


    item.innerHTML = `Item ${count++}`;
    list.appendChild(item);
}
function removeItem() {
    const list = document.querySelector('ol');
    const item = list.querySelector('li:first-child');

    list.removeChild(item);
}

const buttonAdd = document.querySelector('#new-item');
const buttonRemove = document.querySelector('#remove-item');

buttonAdd.addEventListener('click', addItem);
buttonRemove.addEventListener('click', removeItem);