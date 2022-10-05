// ячейка поля
const cell = document.querySelector('.game__cell');

// иконка крестика
const christ = document.createElement('img'); // создает 
christ.setAttribute('src', './images/christ.png'); // добавляет атрибут и значение атрибута
christ.className = 'game__cell-christ-image'; // добавляет класс
console.log(christ);

// обработчик по клику на ячейку поля
const handleClick = () => cell.insertAdjacentHTML('beforeend', christ);

// слушатель по клику на ячейку
cell.addEventListener('click', () => console.log('click!'));