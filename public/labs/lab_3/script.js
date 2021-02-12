/* Put your javascript in here */
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const list1 = document.querySelectorAll('li');
const array1 = Array.from(list1);

let position = 0;

function moveRight() {
  array1.forEach((element) => {
    position -= 110;
    element.style.left = position + 'px';
  });
}

function moveLeft() {
  array1.forEach((element) => {
    position += 110;
    element.style.left = position + 'px';
  });
}

arrowRight.addEventListener('click', (event) => {
  moveRight();
});

arrowLeft.addEventListener('click', (event) => {
  moveLeft();
});