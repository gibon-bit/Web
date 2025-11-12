// Адаптивное меню
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('nav__list--active');
});

/* Чтобы в CSS сделать меню скрытым и показываемым на мобильных, нужно будет добавить стили */
// Форма и модальное окно
const form = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', e => {
  e.preventDefault();
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
