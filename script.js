/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const groceriesContainer = document.querySelector('.groceries')

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const groceriesText = sendInput.value;
    }

    const newGroceries = document.createElement('div');
    newGroceries.classList.add('text');
    newGroceries.textContent = groceriesText;

    const listElement = document.querySelectorAll('div');
    for (div of listElement) {
        div.addEventListener('click', function() {
            div.classList.toggle('done');
        });
    };

    if (groceriesText != '') {
        groceriesContainer.append(groceriesText);
    }

    sendInput.value = '';
});
/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */