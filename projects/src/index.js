/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
//import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let startX = 0;
let startY = 0;
let currentElement;
document.addEventListener('mousemove', (e) => {
  if (currentElement) {
    currentElement.style.top = e.clientY - startY + 'px';
    currentElement.style.left = e.clientX - startX + 'px';
  }
});

function createDiv() {
  const div = document.createElement('div');

  div.className = '.draggable-div';
  div.style =
    'background-color: ' +
    '#' +
    (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  div.style.width = (300 * Math.random()).toFixed() + 'px';
  div.style.height = (200 * Math.random()).toFixed() + 'px';
  div.style.top = (window.innerHeight * Math.random()).toFixed() + 'px';
  div.style.left = (window.innerWidth * Math.random()).toFixed() + 'px';
  div.style.position = 'absolute';

  div.addEventListener('mousedown', (e) => {
    currentElement = div;
    startX = e.offsetX;
    startY = e.offsetY;
  });
  div.addEventListener('mouseup', () => (currentElement = false));
  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  homeworkContainer.appendChild(createDiv());
});
